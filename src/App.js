import React, {Component} from 'react';
import Searchbar from './Searchbar';
import Movies from './Movies';
import Footer from './Footer';

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
        <Footer />
      </div>
    );
  }

}

export default App;
