import React, {Component} from 'react';
import { fromEvent } from 'rxjs';
import { debounceTime, map } from 'rxjs/operators';
import { messageService } from '../../shared/message-service';
import { getSpeechRecognition, readOutLoud } from '../../shared/speech-service';
import { Navbar } from "react-bootstrap";
import "./searchbar.scss";

class Searchbar extends Component {

  constructor(){
    super();
    this.state = {
      isQuery : false
    }
    this.searchRef = React.createRef();
    this.deleteSearchRef = React.createRef();
    this.speakInputRef = React.createRef();
    this.recognition = getSpeechRecognition();
  }

  render(){
    return (
          <Navbar className="search-bar" fixed="top">
            <i className="icons search-cam">
              <svg aria-hidden="true" focusable="false" data-prefix="fad" data-icon="camera-movie" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" className="svg-inline--fa fa-camera-movie fa-w-20 fa-3x"><g className="fa-group"><path fill="currentColor" d="M368.2 288H16a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h48v112.2a47.81 47.81 0 0 0 47.8 47.8h256.4a47.81 47.81 0 0 0 47.8-47.8V335.8a47.81 47.81 0 0 0-47.8-47.8zM128 192a64 64 0 1 0-64-64 64.07 64.07 0 0 0 64 64zm224 0a64 64 0 1 0-64-64 64.07 64.07 0 0 0 64 64z" className="fa-secondary"></path><path fill="currentColor" d="M535.68 260.59L448 321.07V447l87.68 60.4c17 11.68 40.32-.23 40.32-20.64V281.23c0-20.33-23.27-32.33-40.32-20.64zM352 0c-48.57 0-90.31 27.37-112 67.24C218.31 27.37 176.57 0 128 0a128 128 0 0 0 0 256h224a128 128 0 0 0 0-256zM128 192a64 64 0 1 1 64-64 64.07 64.07 0 0 1-64 64zm224 0a64 64 0 1 1 64-64 64.07 64.07 0 0 1-64 64z" className="fa-primary"></path></g></svg>
            </i>
            <input type="text" 
                    id="search" 
                    className="search-input" 
                    placeholder="Search by name or year" 
                    ref={ref => this.searchRef = ref} />
            { /* <i className="icons search-icon" id="pause-record-btn">
              <svg aria-hidden="true" focusable="false" data-prefix="fad" data-icon="search" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="svg-inline--fa fa-search fa-w-20 fa-3x"><g className="fa-group"><path fill="currentColor" d="M208 80a128 128 0 1 1-90.51 37.49A127.15 127.15 0 0 1 208 80m0-80C93.12 0 0 93.12 0 208s93.12 208 208 208 208-93.12 208-208S322.88 0 208 0z" className="fa-secondary"></path><path fill="currentColor" d="M504.9 476.7L476.6 505a23.9 23.9 0 0 1-33.9 0L343 405.3a24 24 0 0 1-7-17V372l36-36h16.3a24 24 0 0 1 17 7l99.7 99.7a24.11 24.11 0 0 1-.1 34z" className="fa-primary"></path></g></svg>        
            </i> */}
            <i className="icons search-speech" id="start-record-btn"
              ref={ref => this.speakInputRef = ref}>
              <svg aria-hidden="true" focusable="false" data-prefix="fad" data-icon="microphone" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 352 512" className="svg-inline--fa fa-microphone fa-w-20 fa-3x"><g className="fa-group"><path fill="currentColor" d="M80 256V96a96 96 0 0 1 192 0v160a96 96 0 0 1-192 0z" className="fa-secondary"></path><path fill="currentColor" d="M352 256c0 88.9-66.29 162.47-152 174.23V464h56a16 16 0 0 1 16 16v16a16 16 0 0 1-16 16H96a16 16 0 0 1-16-16v-16a16 16 0 0 1 16-16h56v-34.15C64 417.71 0 337.8 0 248.16V208a16 16 0 0 1 16-16h16a16 16 0 0 1 16 16v42.3c0 66.81 48.71 126.59 115.21 133.08A128.15 128.15 0 0 0 304 256v-48a16 16 0 0 1 16-16h16a16 16 0 0 1 16 16z" className="fa-primary"></path></g></svg>      
            </i>
            <i className="icons search-clear" id="search-clear-btn"
                style={{'display' : this.state.isQuery ? 'block' : 'none'}}
                ref={ref => this.deleteSearchRef = ref}>     
              <svg aria-hidden="true" focusable="false" data-prefix="fad" data-icon="trash-alt" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="svg-inline--fa fa-trash-alt fa-w-20 fa-3x"><g className="fa-group"><path fill="currentColor" d="M32 464a48 48 0 0 0 48 48h288a48 48 0 0 0 48-48V96H32zm272-288a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0z" className="fa-secondary"></path><path fill="currentColor" d="M432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16zM128 160a16 16 0 0 0-16 16v224a16 16 0 0 0 32 0V176a16 16 0 0 0-16-16zm96 0a16 16 0 0 0-16 16v224a16 16 0 0 0 32 0V176a16 16 0 0 0-16-16zm96 0a16 16 0 0 0-16 16v224a16 16 0 0 0 32 0V176a16 16 0 0 0-16-16z" className="fa-primary"></path></g></svg>      
            </i>
        </Navbar>
    );
  }

  componentDidMount(event){
    const searchKeyup$ = fromEvent(this.searchRef, 'keyup', false);
    const deleteSearch$ = fromEvent(this.deleteSearchRef, 'click');
    const speakClick$ = fromEvent(this.speakInputRef, 'click');
    const speakOutput$ = fromEvent(this.recognition, 'result');

    // wait 5.s between keyups to emit current value
    searchKeyup$
    .pipe(
      map((event) => {
        return event.currentTarget.value
      }),
      debounceTime(300)
    )
    .subscribe((data) => {
      this.setState({
        isQuery: Boolean(data)
      });
      messageService.send(data)
    });
    
    deleteSearch$
    .subscribe(() => {
        this.searchRef.value = '';
        this.setState({
          isQuery: false
        })
        messageService.send('');
      }
    );

    speakClick$
    .subscribe(() => {
        this.recognition.start();
      }
    );

    // This block is called every time the Speech API captures a line.
    speakOutput$
    .subscribe((event) => {
        const current = event.resultIndex;
        // Get a transcript of what was said.
        const transcript = event.results[current][0].transcript;
        readOutLoud(transcript);
        this.searchRef.value = transcript;      // set the transcript in search bar
        this.setState({
          isQuery: true
        });
        messageService.send(transcript);
    });

  }

}

export default Searchbar