import React from "react";
import PropTypes from "prop-types";

const Thumb = props => {
  const { image, onThumbClick } = props;

  const onClick = event => {
    event.preventDefault();
    onThumbClick(image);
  };

  return (
    <a
      key={image.id}
      href={image.href}
      className="thumbs__link"
      onClick={onClick}
    >
      <img className="thumbs__link__img" src={image.thumb} alt="" />
    </a>
  );
};

Thumb.propTypes = {
  image: PropTypes.shape({
    id: PropTypes.string,
    thumb: PropTypes.string,
    main: PropTypes.string,
    href: PropTypes.string,
    user: PropTypes.shape({
      name: PropTypes.string,
      url: PropTypes.string
    })
  }),
  onThumbClick: PropTypes.func
};

export default Thumb;
