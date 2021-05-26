import React, {Component} from 'react';
import { messageService } from '../../shared/message-service';
import classNames from 'classnames';
import "./footer.scss";

class Footer extends Component {

  constructor(){
    super();
    this.state = {
      rating : 'ALL'
    }
    this.ratingMap = {
        'ALL' : [],
        'GOOD': [9,10],
        'AVG': [6,8],
        'BAD': [1,5] 
    }
  }

    getClassNames(name){
        return classNames(
            'icons', 
            {'faded' : this.state.rating !== name}
        )
    }

    selectRating(e, rating){
        this.setState({
            rating: rating
        })
        messageService.send(this.ratingMap[rating], 'rate');
    }

  render(){
      
    return (
          <div className="footer align-items-center d-flex">
            <i className={this.getClassNames('BAD')} onClick={(e) => this.selectRating(e, 'BAD')}>
                <svg aria-hidden="true" focusable="false" data-prefix="fad" data-icon="frown" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" className="icon-bad svg-inline--fa fa-frown fa-w-16"><g className="fa-group"><path fill="currentColor" d="M248,8C111,8,0,119,0,256S111,504,248,504,496,393,496,256,385,8,248,8Zm80,168a32,32,0,1,1-32,32A32,32,0,0,1,328,176Zm-160,0a32,32,0,1,1-32,32A32,32,0,0,1,168,176ZM338.2,394.2a117.5,117.5,0,0,0-180.4,0c-13.5,16.3-38.1-4.2-24.6-20.5a149.34,149.34,0,0,1,229.5.1C376.3,390,351.7,410.5,338.2,394.2Z" className="fa-secondary"></path><path fill="currentColor" d="M168,176a32,32,0,1,0,32,32A32,32,0,0,0,168,176Zm160,0a32,32,0,1,0,32,32A32,32,0,0,0,328,176Z" className="fa-primary"></path></g></svg>
            </i>
            <i className={this.getClassNames('AVG')} onClick={(e) => this.selectRating(e, 'AVG')}>
                <svg aria-hidden="true" focusable="false" data-prefix="fad" data-icon="smile" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" className="icon-avg svg-inline--fa fa-smile fa-w-16"><g className="fa-group"><path fill="currentColor" d="M248,8C111,8,0,119,0,256S111,504,248,504,496,393,496,256,385,8,248,8Zm80,168a32,32,0,1,1-32,32A32,32,0,0,1,328,176Zm-160,0a32,32,0,1,1-32,32A32,32,0,0,1,168,176ZM362.8,346.2a149.38,149.38,0,0,1-229.6,0c-13.6-16.3,11-36.7,24.6-20.5a117.5,117.5,0,0,0,180.4,0C351.6,309.5,376.3,329.9,362.8,346.2Z" className="fa-secondary"></path><path fill="currentColor" d="M328,176a32,32,0,1,0,32,32A32,32,0,0,0,328,176Zm-160,0a32,32,0,1,0,32,32A32,32,0,0,0,168,176Z" className="fa-primary"></path></g></svg>            
            </i>
            <i className={this.getClassNames('GOOD')} onClick={(e) => this.selectRating(e, 'GOOD')}>
                <svg aria-hidden="true" focusable="false" data-prefix="fad" data-icon="grin-hearts" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" className="icon-good svg-inline--fa fa-grin-hearts fa-w-16"><g className="fa-group"><path fill="currentColor" d="M248,8C111,8,0,119,0,256S111,504,248,504,496,393,496,256,385,8,248,8ZM90.4,183.6c6.7-17.6,26.7-26.7,44.9-21.9l7.1,1.9,2-7.1c5-18.1,22.8-30.9,41.5-27.9a35.38,35.38,0,0,1,29.71,40.26h0a35.93,35.93,0,0,1-.91,4.24L195.3,243a8.59,8.59,0,0,1-10.5,6l-70.2-18.2a35.49,35.49,0,0,1-25.47-43.25h0A34.27,34.27,0,0,1,90.4,183.6ZM391.8,338.7c-9.3,55-83.2,93.3-143.8,93.3s-134.5-38.3-143.8-93.3a16,16,0,0,1,20.7-17.9C155.1,330.5,200,336,248,336s92.9-5.5,123.1-15.2a16.08,16.08,0,0,1,20.7,17.9Zm-10.4-108-70.2,18.2a8.68,8.68,0,0,1-10.5-6L281.3,173a35.38,35.38,0,0,1,24.54-43.59h0a35.93,35.93,0,0,1,4.24-.91c18.6-3,36.4,9.8,41.5,27.9l2,7.1,7.1-1.9c18.2-4.7,38.2,4.3,44.9,21.9a35.42,35.42,0,0,1-20.1,45.88,36.92,36.92,0,0,1-4.1,1.32Z" className="fa-secondary"></path><path fill="currentColor" d="M185.9,128.6c-18.7-3-36.5,9.8-41.5,27.9l-2,7.1-7.1-1.9c-18.2-4.8-38.2,4.3-44.9,21.9a35.5,35.5,0,0,0,20.25,45.93,36.32,36.32,0,0,0,3.95,1.27L184.8,249a8.59,8.59,0,0,0,10.5-6l19.4-69.9a35.38,35.38,0,0,0-24.54-43.59h0a35.93,35.93,0,0,0-4.24-.91Zm219.7,54.9c-6.7-17.6-26.7-26.6-44.9-21.9l-7.1,1.9-2-7.1c-5.1-18.1-22.9-30.9-41.5-27.9a35.38,35.38,0,0,0-29.71,40.26h0a35.93,35.93,0,0,0,.91,4.24l19.4,69.9a8.68,8.68,0,0,0,10.5,6l70.2-18.2a35.4,35.4,0,0,0,25.52-43.08v0a36.92,36.92,0,0,0-1.32-4.1Z" className="fa-primary"></path></g></svg>
            </i>
            <i className={this.getClassNames('ALL')} onClick={(e) => this.selectRating(e, 'ALL')}>
                <span className="icon-text">ALL</span>
            </i>
        </div>
    );
  }

}

export default Footer