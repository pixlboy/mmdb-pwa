import React, {Component} from 'react';
import {firestore, storage} from '../../firebase/connect';
import { subscriber } from '../../shared/message-service';
import Scroller from '../scroller/scroller';
import classNames from 'classnames';
import Fuse from 'fuse.js';
import { Row, Col } from "react-bootstrap";
import "./movies.scss";
import img from '../../images/placeholder.png';

class Movies extends Component {

  constructor(){
    super();
    this.state = {
      movies: [],
      isLoader: true
    };
    this.categories = [];
  }

  async getImgPath(name) {
    const storageRef = storage.ref(`/thumbs/${name}`);
   // console.log(ref.getDownloadURL());
   const url = await storageRef.getDownloadURL().then((url) => {
      return url;
    }).catch((err) => {
      return null;
    });
    return url;
  }

  async getAllMovies() {
    const collection = firestore.collection('movies');
    const snapshot = await collection.get();
    return snapshot.docs.map(async (doc) => {
      const url = await this.getImgPath(doc.data().path);
      const item = this.addCategory(doc.data());
      item.storagePath = url;
      return item;
    });
  }

  addCategory(item){
    let category = '';
    if(item.name.charAt(0).match(/[a-z]/gi)){
      category = item.name.charAt(0);
      this.buildUniqueCategories(category);
    } else{
      category = '#';
    }
    item['category'] = category;
    return item;
  }

  buildUniqueCategories(category){
    if(this.categories.indexOf(category) === -1){
      this.categories.push(category);
    }
  }

  correctCategoryOrder(){
    this.categories.sort().push('#');
  }

  componentDidMount(){

    subscriber.subscribe(msg => {
      if(msg.type === 'rate'){
        this.setState({
          movies: this.filterByRating(msg.query),
        })
      } else{
        this.setState({
          movies: this.getSearchResults(msg.query),
        })
      }
    });

    this.getAllMovies().then((movies) => {
        Promise.all(movies).then((values) => {
          this.correctCategoryOrder();
          this.setState({
            movies: values,
            initialStore: values,
            isLoader: false
          })   
        });
      }
    );

  }

  render(){
 
    const loaderClass = classNames(
      'mdc-linear-progress',
      'mdc-linear-progress--indeterminate',
      {'mdc-linear-progress--closed' : !this.state.isLoader});
    const getMoviesInCategory = (category) => {
      return this.state.movies
        .filter(item => item.category === category)
        .map((item, idx) => {
          return <Col key={idx} className="p-2">
            <div className="mdc-card">
          <div 
              className="mdc-card__media" 
              tabIndex="0"
              >
              <img src={item.storagePath ? item.storagePath : img} 
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
        })
    };

    const categories = this.categories
      .map((item) => {
        const moviesList = getMoviesInCategory(item);
        const list = moviesList.length ? 
          <div key={item} id={`movies-${item}`}>
            {/* <h3 className="mdc-typography mdc-typography--subtitle2 category-head">{item}</h3> */}
            <Row xs={1} sm={2} md={3} lg={4} className="movie-list">
              {moviesList}
            </Row>
          </div> : null;
          return list;
      }
    );

    return (
      <div id="container" className="result-container" >
        <div className="movie-wrapper">
          <div className="loader">
            <div role="progressbar" className={loaderClass} aria-label="Progress Bar" 
              aria-valuemin="0" aria-valuemax="1">
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
          <h6 className="mdc-typography mdc-typography--overline list-length">
            Showing {this.state.movies.length} results
          </h6>
          {categories}
        </div>
        <Scroller scrollList={this.categories} />
      </div>
    );
  }

  getSearchResults(val){
    if(val){
      const options = {
        keys: ['name', 'year'],
        useExtendedSearch: true,
        findAllMatches: true
      }
      const fuse = new Fuse(this.state.initialStore, options)
      const search = fuse.search(`'${val}`);
  
      return search.flatMap((obj) => {
        return obj.item;
      });  
    }
    return this.state.initialStore;
  }

  filterByRating(val){
    if(val.length){
      return this.state.initialStore.filter((item) => {
        if(item.rating >= val[0] && item.rating <= val[1]){
          return item;
        }
        return false;
      });  
    }
    return this.state.initialStore;
  }

}

export default Movies;

