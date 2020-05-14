import React, {Component} from 'react';
//import FuzzySearch from 'fuzzy-search';
import 'react-mdl/extra/material.css';
import {Card, CardTitle, CardText} from 'react-mdl';

class Movies extends Component {

  constructor(){
    super();
    this.state = {};
    this.movies = [{
      "path": "1971.jpg",
      "name": "",
      "year": "g",
      "rating": 8
    },
    {
      "path": "127 Hours [].jpg",
      "name": "127 H",
      "year": "rs [",
      "rating": 6
    }];
    this.imgBasePath = './images/thumbs/';  //to deploy remove client
  }

  render(){

    const listItems = this.movies.map((item) =>
      <Card shadow={0} key={item.name}>
          <CardTitle expand 
            style={
              {
                backgroundImage:`url(${this.imgBasePath}${item.path})`,
                backgroundRepeat: 'no-repeat'
              }
          }>
          </CardTitle>
          <CardText className="card-content">
            <div className="">{item.name} ({item.year})</div>
            <div className=""
              dangerouslySetInnerHTML={{ __html: this.getLike(item.rating) }}>
            </div>
          </CardText>
      </Card>
    );

    return (
        <ul id='listContainer'>
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
            list.push(`<i class="material-icons ${likeClass}">favorite</i>`);
        } else{
            list.push(`<i class="material-icons ${defaultClass}">favorite_outline</i>`);
        }
    };
    return list.join('');      
  }

  // searchMovie(){
  //   const val = searchInput.value;
  //   //perform search based on criteria
  //   const searcher = new FuzzySearch(
  //       movies, 
  //       ['name', 'year'], {
  //           caseSensitive: false
  //   });
  //   //store matched items
  //   const searchList = searcher.search(val);
  //   clearDOM();
  //   searchList.forEach((item) => {
  //       addDOMItem(item);
  //   });
  // }


}

export default Movies;

