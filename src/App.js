import React, {Component} from 'react';
import Searchbar from './Searchbar';
import Movies from './Movies';

class App extends Component {

  constructor(){
    super();
    this.state = {};
  }

  render(){
    return (
      <div>
        <Searchbar />
        <div id='container' className='container'>
          <Movies />
        </div>
      </div>
    );
  }

}

export default App;
