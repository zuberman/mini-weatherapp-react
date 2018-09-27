import React from 'react';
import Thumb from './Thumb';

class Thumbs extends React.Component {

  constructor(){
    super();
    // this.state = {};

  }




  render(){
    return (
      <div className="thumbs" id="thumbs">
      {this.props.images.map( image => {
        return (
          <Thumb key={image.id} imageItem={image} receiveImage={this.props.receiveImage}/>
        )
      })}
  </div>)
}
}
export default Thumbs;
