import React, {Component} from 'react';

class Scroller extends Component {

  constructor(){
    super();
    this.state = {
        scrollList : []
    };
    this.scollInto = this.scollInto.bind(this);
  }

  componentDidMount(){
  }

  componentWillReceiveProps(){
    this.setState({
        scrollList : this.props.scrollList
    });
  }

  scollInto(evt){
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
              <li key={item} onClick={(evt) => this.scollInto(evt)}>{item}</li>
            )
        }
      </ul>
    );
  }

}

export default Scroller;

