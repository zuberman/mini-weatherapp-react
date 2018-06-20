import React from "react";
import PropTypes from "prop-types";

class Photo extends React.Component {
  render() {
    return (
      <figure className="photo">
        <img src={this.props.url} alt={this.props.url} />
      </figure>
    );
  }
}

Photo.propTypes = {
  url: PropTypes.string
};

export default Photo;
