import { Card, ProgressBar, Row, Col, Form, Button } from "react-bootstrap";
import { UserContext } from "../shared/user-provider";
import { Link } from "react-router-dom";
import { signInWithGoogle, logOut } from "../firebase/auth";
import { firestore } from "../firebase/connect";
import React, { useState, useEffect, useContext } from "react";

const useFormField = (initialValue = "") => {
  const [value, setValue] = React.useState(initialValue);
  const onChange = React.useCallback((e) => setValue(e.target.value), []);
  return { value, onChange };
};

export default function Admin() {
  const { user } = useContext(UserContext);
  const [isPermission, setPermission] = useState(null);
  const nameField = useFormField();
  const ratingField = useFormField();
  const yearField = useFormField();

  useEffect(() => {
    if (user?.email) {
      const dataRef = firestore.collection("users");
      dataRef
        .where("email", "==", user.email)
        .get()
        .then((data) => {
          data.forEach((doc) => {
            setPermission(true);
          });
        });
    }
  }, [user]);

  const addItem = (e) => {
    const dataRef = firestore.collection("movies");
    dataRef
      .add({
        name: nameField.value,
        path: `${nameField.value} (${yearField.value}).jpg`,
        rating: Number(ratingField.value),
        year: Number(yearField.value),
      })
      .then((docRef) => {
        console.log("Success", docRef);
      })
      .catch((error) => {
        console.log("Error", error);
      });
  };

  const formBody = () => {
    return (
      <>
        <h6 className="mb-3">Add New Movie</h6>
        <Form.Group as={Row}>
          <Col className="pb-3">
            <Form.Label className="mt-2">Name</Form.Label>
            <Form.Control type="text" {...nameField} />
            <Form.Label className="mt-3">Rating</Form.Label>
            <Form.Control type="text" {...ratingField} />
            <Form.Label className="mt-3">Year</Form.Label>
            <Form.Control type="text" {...yearField} />
          </Col>
        </Form.Group>
        <Button
          variant="success"
          className="float-right"
          disabled={!nameField.value || !ratingField.value || !yearField.value}
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
    } else if (user?.email && isPermission) {
      return formBody();
    } else if (user?.email && !isPermission) {
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
          {user?.displayName && (
            <div className="d-flex justify-content-between">
              <span>{user?.displayName}</span>
              <span>{user?.email}</span>
              <Link to="/admin" onClick={logOut}>
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
