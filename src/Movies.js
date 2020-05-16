import React, {Component} from 'react';
import "@material/card/dist/mdc.card.min.css";
import '@material/typography/dist/mdc.typography.min.css';
import Db from './Db';
import { subscriber } from './MessageService';
import FuzzySearch from 'fuzzy-search';

class Movies extends Component {

  constructor(){
    super();
    this.state = {
      movies: []
    };
    this.imgBasePath = 'https://mmdb-store.s3.ap-south-1.amazonaws.com/thumbs/';
  }

  async getAllMovies() {
    const collection = Db.collection('movies');
    const snapshot = await collection.get();
    return snapshot.docs.map(doc => doc.data());
  }

  componentDidMount(){

    subscriber.subscribe(query => {
      this.setState({
        movies: this.getSearchResults(query)
      })
    });

    this.getAllMovies().then((movies) => {
        this.setState({
          movies: movies,
          initialStore: movies
        })
      }
    );
  }

  render(){

    const listItems = this.state.movies.map((item, idx) =>
      <li key={idx} className="mdc-card">
        <div 
            className="mdc-card__media" 
            tabIndex="0"
            >
            <img src={`${this.imgBasePath}${item.path}`} 
              loading="lazy" 
              alt={item.name}
              height="auto"
              width="100%" />
        </div>
        <div className="card-content">
            <div className="mdc-typography mdc-typography--subtitle2 float-left card-text">
              {item.name} ({item.year})
            </div>
            <div className="mdc-typography mdc-typography--subtitle2 float-right card-rating"
              dangerouslySetInnerHTML={{ __html: this.getLike(item.rating) }}>
            </div>
        </div>
      </li>
    );

    return (
      <ul className="movie-list" id='listContainer'>
        {listItems}
      </ul>
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
    const searcher = new FuzzySearch(
        this.state.initialStore,
        ['name', 'year'], {
            caseSensitive: false
        }
    );
    //store matched items
    return searcher.search(val);
  }

}

export default Movies;

