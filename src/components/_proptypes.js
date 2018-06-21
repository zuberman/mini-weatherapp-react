import PropTypes from "prop-types";

export const ImageType = PropTypes.shape({
  id: PropTypes.string,
  thumb: PropTypes.string,
  main: PropTypes.string,
  href: PropTypes.string,
  user: PropTypes.shape({
    name: PropTypes.string,
    url: PropTypes.string
  })
});

export const ImageTypes = PropTypes.arrayOf(ImageType);
