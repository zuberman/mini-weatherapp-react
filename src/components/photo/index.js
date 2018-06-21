import React from "react";
import PropTypes from "prop-types";

import s from "./styles.scss";

class Photo extends React.Component {
  render() {
    return (
      <figure className={s.photo}>
        <img src={this.props.url} alt={this.props.url} />
      </figure>
    );
  }
}

Photo.propTypes = {
  url: PropTypes.string
};

export default Photo;
