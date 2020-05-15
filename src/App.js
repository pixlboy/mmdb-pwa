import React, {Component} from 'react';
import Searchbar from './Searchbar';
import Movies from './Movies';
import SpeechRecognition from './Speech';

class App extends Component {

  constructor(){
    super();
    this.state = {};
    SpeechRecognition();
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
