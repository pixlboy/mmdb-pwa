import React, {Component, Fragment} from 'react';
import Db from './Db';
import { subscriber } from './MessageService';
import Scroller from './Scroller';
import classNames from 'classnames';
import Fuse from 'fuse.js';

class Movies extends Component {

  constructor(){
    super();
    this.state = {
      movies: [],
      isLoader: true
    };
    this.imgBasePath = 'https://mmdb-store.s3.ap-south-1.amazonaws.com/thumbs/';
    this.categories = [];
  }

  async getAllMovies() {
    const collection = Db.collection('movies');
    const snapshot = await collection.get();
    return snapshot.docs.map(doc => {
      const item = this.addCategory(doc.data());
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
        this.correctCategoryOrder();
        this.setState({
          movies: movies,
          initialStore: movies,
          isLoader: false
        })
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
        .map((item, idx) =>
          <li key={idx} className="mdc-card">
          <div 
              className="mdc-card__media" 
              tabIndex="0"
              >
              <img src={`${this.imgBasePath}${item.path}`} 
                loading="lazy" 
                alt={item.name}
                style={{'height': "auto", 'width': '100%'}}
              />
          </div>
          <div className="card-content">
              <span className="mdc-typography mdc-typography--caption name">
                {item.name}
              </span>
              <span className="mdc-typography mdc-typography--caption">
                <span className="year">({item.year})</span>
                <span className="rating"
                  dangerouslySetInnerHTML={{ __html: this.getLike(item.rating) }}>
                </span>
              </span>
          </div>
        </li>
        )
    };

    const categories = this.categories
      .map((item) => {
        const moviesList = getMoviesInCategory(item);
        const list = moviesList.length ? 
          <div key={item} id={`movies-${item}`}>
            {/* <h3 className="mdc-typography mdc-typography--subtitle2 category-head">{item}</h3> */}
            <ul className="movie-list">
              {moviesList}
            </ul>
          </div> : null;
          return list;
      }
    );

    return (
      <Fragment>
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
      </Fragment>
    );
  }

  getLike(rating){
    let likeClass = 'status-red';
    let elem = `
      <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="heart" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="svg-inline--fa fa-heart fa-w-16">
      <path class=${likeClass} d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"></path></svg>`;

    return rating ? `${elem} ${rating}` : '';
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
      });  
    }
    return this.state.initialStore;
  }

}

export default Movies;

