import {
  Card,
  ProgressBar,
  Row,
  Col,
  Form,
  Button,
  Image,
} from "react-bootstrap";
import { UserContext } from "../shared/user-provider";
import { Link } from "react-router-dom";
import { signInWithGoogle, logOut } from "../firebase/auth";
import { firestore, storage } from "../firebase/connect";
import React, { useState, useEffect, useContext, useRef } from "react";

export default function Admin() {
  const { user } = useContext(UserContext);
  const [isPermission, setPermission] = useState(null);
  const nameRef = useRef("");
  const ratingRef = useRef("");
  const yearRef = useRef("");
  const [selectedFile, setSelectedFile] = useState(null);

  useEffect(() => {
    if (user?.uid) {
      firestore
        .collection("users")
        .doc(user.uid)
        .get()
        .then((doc) => {
          setPermission(doc.data().isAllowedAccess);
        });
    }
  }, [user]);

  const addItem = () => {
    const promise1 = uploadDocument();
    const promise2 = upLoadFile();
    Promise.all([promise1, promise2]).then(values => {
      resetForm();
    })
  };

  const resetForm = () => {
    nameRef.current.value = "";
    ratingRef.current.value = "";
    yearRef.current.value = "";
    setSelectedFile(null);
  };

  const fileChangeHandler = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const uploadDocument = () => {
    const dataRef = firestore.collection("movies");
    return dataRef
      .add({
        name: nameRef.current.value,
        path: selectedFile.name,
        rating: Number(ratingRef.current.value),
        year: Number(yearRef.current.value),
      })
      .then((msg) => {
        console.log("Document upload successful");
      })
      .catch((error) => {
        console.log("Document upload failed", error);
      });
  };

  const upLoadFile = () => {
    const storageRef = storage.ref();
    const imageRef = storageRef.child(`/thumbs/${selectedFile.name}`);
    return imageRef
      .put(selectedFile)
      .then((msg) => {
        console.log("File upload successful");
      })
      .catch((error) => {
        console.log('File upload failed', error);
      });
  };

  const formBody = () => {
    return (
      <>
        <h6 className="mb-3">Add New Movie</h6>
        <Form.Group as={Row}>
          <Col className="pb-3">
            <Form.Label className="mt-2">Name</Form.Label>
            <Form.Control type="text" ref={nameRef} />
            <Form.Label className="mt-3">Rating</Form.Label>
            <Form.Control type="text" ref={ratingRef} />
            <Form.Label className="mt-3">Year</Form.Label>
            <Form.Control type="text" ref={yearRef} />
            <Form.Label className="mt-3">File</Form.Label>
            <Form.Control type="file" onChange={fileChangeHandler} />
          </Col>
        </Form.Group>
        <Button
          variant="success"
          className="float-right"
          disabled={
            !nameRef.current.value ||
            !ratingRef.current.value ||
            !yearRef.current.value ||
            !selectedFile
          }
          onClick={() => addItem()}
        >
          Save
        </Button>{" "}
      </>
    );
  };

  const cardBody = () => {
    if (user === null) {
      return <ProgressBar animated now={100} />;
    } else if (user?.uid && isPermission) {
      return formBody();
    } else if (user?.uid && !isPermission) {
      return <span>Sorry, you are not an authorised user.</span>;
    } else {
      return (
        <>
          Please{" "}
          <Link to="/admin" onClick={signInWithGoogle}>
            login
          </Link>{" "}
          to continue.
        </>
      );
    }
  };

  return (
    <div className="admin-page">
      <Card>
        <Card.Header>
          {user?.uid && (
            <div className="d-flex align-items-center">
              <Image
                src={user?.photoURL}
                roundedCircle
                width="36"
                height="36"
                alt="user image"
              />
              <span className="ml-3">{user.displayName}</span>
              <Link to="/admin" className="ml-auto" onClick={logOut}>
                Logout
              </Link>
            </div>
          )}
        </Card.Header>
        <Card.Body className="p-3">{cardBody()}</Card.Body>
      </Card>
    </div>
  );
}
