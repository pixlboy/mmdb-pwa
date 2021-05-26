import React, {Component} from 'react';
import "./scroller.scss";

class Scroller extends Component {

  constructor(){
    super();
    this.state = {
        scrollList : []
    };
    this.scrollInto = this.scrollInto.bind(this);
  }

  componentDidMount(){
    this.setState({
      scrollList : this.props.scrollList
    });
  }


  scrollInto(evt){
    const target = evt.target.innerHTML;
    const elem = document.getElementById(`movies-${target}`);
    if(elem){
        elem.scrollIntoView();
    }
  }

  render(){
   
    return (
      <ul className="scroll-wrapper">
        {this.state.scrollList
            .map((item, idx) =>
              <li key={item} onClick={(evt) => this.scrollInto(evt)}>{item}</li>
            )
        }
      </ul>
    );
  }

}

export default Scroller;

