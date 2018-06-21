import React from "react";
import PropTypes from "prop-types";

import s from "./styles.scss";

class Thumbs extends React.Component {
  constructor() {
    super();

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(index) {
    const callback = this.props.onClick;

    return function(event) {
      event.preventDefault();
      callback(index);
    };
  }

  render() {
    return (
      <div className={s.thumbs}>
        {this.props.photos.map((photo, index) => (
          <a
            key={photo.id}
            href={photo.href}
            className={s.thumbs__link}
            onClick={this.handleClick(index)}
          >
            <img className={s.thumbs__link__img} src={photo.url} alt="" />
          </a>
        ))}
      </div>
    );
  }
}

Thumbs.propTypes = {
  photos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      href: PropTypes.string,
      url: PropTypes.string
    })
  ),
  onClick: PropTypes.func
};

Thumbs.defaultProps = {
  photos: [],
  onClick: Function.prototype
};

export default Thumbs;
