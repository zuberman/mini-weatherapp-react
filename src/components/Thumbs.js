import React from "react";
import PropTypes from "prop-types";

import Thumb from "./Thumb";

import { ImageTypes } from "./_proptypes";

class Thumbs extends React.Component {
  render() {
    return (
      <div className="thumbs">
        {this.props.images.map(image => (
          <Thumb
            key={image.id}
            image={image}
            onThumbClick={this.props.onThumbClick}
          />
        ))}
      </div>
    );
  }
}

Thumbs.propTypes = {
  images: ImageTypes,
  onThumbClick: PropTypes.func
};

Thumbs.defaultProps = {
  images: [],
  onThumbClick: Function.prototype
};

export default Thumbs;
