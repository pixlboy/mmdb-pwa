import React, { useState, useEffect } from "react";
import { firestore } from "../../firebase/connect";
import { subscriber } from "../../shared/message-service";
import Scroller from "../scroller/scroller";
import classNames from "classnames";
import Fuse from "fuse.js";
import { Row, Col } from "react-bootstrap";
import "./movies.scss";
import img from "../../images/placeholder.png";

export default function Movies() {
  const [movies, setMovies] = useState([]);
  const [initialStore, setInitialStore] = useState([]);
  const [isLoader, setIsLoader] = useState(true);
  const [categoryList, setCategoryList] = useState([]);
  const categories = [];

  const addCategory = (item) => {
    let category = "";
    if (item.name.charAt(0).match(/[a-z]/gi)) {
      category = item.name.charAt(0);
      buildUniqueCategories(category);
    } else {
      category = "#";
    }
    item["category"] = category;
    return item;
  };

  const correctCategoryOrder = () => {
    categories.sort().push("#");
  };

  useEffect(() => {
    const items = [];
    const collection = firestore.collection("movies");
    collection.get().then((data) => {
      data.forEach((doc) => {
        const item = addCategory(doc.data());
        // getImgPath(doc.data().path).then((url) => {
        //   item.storagePath = url;
        //   items.push(item);
        // });
        items.push(item);
      });
      correctCategoryOrder();
      setCategoryList(categories);
      setMovies(items);
      setInitialStore(items);
      setIsLoader(false);
    });
  }, []);

  // function getImgPath(name) {
  //   const storageRef = storage.ref(`/thumbs/${name}`);
  //   return storageRef
  //     .getDownloadURL()
  //     .then((url) => {
  //       return url;
  //     })
  //     .catch((err) => {
  //       return null;
  //     });
  // }

  const buildUniqueCategories = (category) => {
    if (categories.indexOf(category) === -1) {
      categories.push(category);
    }
  };

  const getSearchResults = (val) => {
    if (val) {
      const options = {
        keys: ["name", "year"],
        useExtendedSearch: true,
        findAllMatches: true,
      };
      const fuse = new Fuse(initialStore, options);
      const search = fuse.search(`'${val}`);
      return search.flatMap((obj) => {
        return obj.item;
      });
    }
    return initialStore;
  };

  const filterByRating = (val) => {
    if (val.length) {
      return initialStore.filter((item) => {
        if (item.rating >= val[0] && item.rating <= val[1]) {
          return item;
        }
        return false;
      });
    }
    return initialStore;
  };

  const loaderClass = classNames(
    "mdc-linear-progress",
    "mdc-linear-progress--indeterminate",
    { "mdc-linear-progress--closed": !isLoader }
  );

  useEffect(() => {
    subscriber.subscribe((msg) => {
      if (msg.type === "rate") {
        setMovies(filterByRating(msg.query));
      } else {
        setMovies(getSearchResults(msg.query));
      }
    });
  }, [subscriber, filterByRating, getSearchResults]);

  const getMoviesInCategory = (category) => {
    return movies
      .filter((item) => item.category === category)
      .map((item, idx) => {
        return (
          <Col key={idx} className="p-2">
            <div className="mdc-card">
              <div className="mdc-card__media" tabIndex="0">
                <img
                  src={item.storagePath ? item.storagePath : img}
                  loading="lazy"
                  alt={item.name}
                />
              </div>
              <div className="card-content">
                <span className="mdc-typography mdc-typography--caption name">
                  {item.name}
                </span>
                <span className="mdc-typography mdc-typography--caption">
                  <span className="year">({item.year})</span>
                  <span className="rating d-flex align-items-center">
                    <i className="status-red"></i>
                    <span>{item.rating}</span>
                  </span>
                </span>
              </div>
            </div>
          </Col>
        );
      });
  };

  const allCategories = () => {
    return categoryList.map((item) => {
      const moviesList = getMoviesInCategory(item);
      const list = moviesList.length ? (
        <div key={item} id={`movies-${item}`}>
          <Row xs={1} sm={2} md={3} lg={4} className="movie-list">
            {moviesList}
          </Row>
        </div>
      ) : null;
      return list;
    });
  };

  return (
    <div id="container" className="result-container">
      <div className="movie-wrapper">
        <div className="loader">
          <div
            role="progressbar"
            className={loaderClass}
            aria-label="Progress Bar"
            aria-valuemin="0"
            aria-valuemax="1"
          >
            <div className="mdc-linear-progress__buffer">
              <div className="mdc-linear-progress__buffer-bar"></div>
              <div className="mdc-linear-progress__buffer-dots"></div>
            </div>
            <div className="mdc-linear-progress__bar mdc-linear-progress__primary-bar">
              <span className="mdc-linear-progress__bar-inner"></span>
            </div>
            <div className="mdc-linear-progress__bar mdc-linear-progress__secondary-bar">
              <span className="mdc-linear-progress__bar-inner"></span>
            </div>
          </div>
        </div>
        {movies.length && categoryList.length && (
          <>
            <h6 className="mdc-typography mdc-typography--overline list-length">
              Showing {movies.length} results
            </h6>
            {allCategories()}
          </>
        )}
      </div>
      {categoryList.length && <Scroller scrollList={categoryList} />}
    </div>
  );
}
