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
      if(query){
        this.setState({
          movies: this.getSearchResults(query)
        })  
      } else{
        this.setState({
          movies: this.state.initialStore
        })
      }
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
            <div className="mdc-typography mdc-typography--subtitle2">
              {item.name} ({item.year})
            </div>
            <div className="mdc-typography mdc-typography--subtitle2 hearts"
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
    let list = [];
    let likeClass = 'status-red';
    let defaultClass = 'status-default';
    for(let i = 0; i < 10; i++){
        if(i < rating){
            list.push(`
              <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="heart" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="svg-inline--fa fa-heart fa-w-16">
              <path class=${likeClass} d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"></path></svg>            
            `);
        } else{
            list.push(`
              <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="heart" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="svg-inline--fa fa-heart fa-w-16">
              <path class=${defaultClass} d="M458.4 64.3C400.6 15.7 311.3 23 256 79.3 200.7 23 111.4 15.6 53.6 64.3-21.6 127.6-10.6 230.8 43 285.5l175.4 178.7c10 10.2 23.4 15.9 37.6 15.9 14.3 0 27.6-5.6 37.6-15.8L469 285.6c53.5-54.7 64.7-157.9-10.6-221.3zm-23.6 187.5L259.4 430.5c-2.4 2.4-4.4 2.4-6.8 0L77.2 251.8c-36.5-37.2-43.9-107.6 7.3-150.7 38.9-32.7 98.9-27.8 136.5 10.5l35 35.7 35-35.7c37.8-38.5 97.8-43.2 136.5-10.6 51.1 43.1 43.5 113.9 7.3 150.8z"></path></svg>
          `);
        }
    };
    return list.join('');
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

