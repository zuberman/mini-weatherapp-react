import React from "react";
import PropTypes from "prop-types";

const Info = ({ user, weather }) => (
  <div className="info">
    <p className="info__item info__item--conditions">{weather}</p>
    <p className="info__item info__item--credits">
      <a href={user.url}>{user.name}</a>
      <span>on</span>
      <a href="#">Unsplash</a>
    </p>
  </div>
);

Info.propTypes = {
  weather: PropTypes.string,
  user: PropTypes.shape({
    url: PropTypes.string,
    name: PropTypes.string
  })
};

Info.defaultProps = {
  conditions: "",
  user: {
    url: "",
    name: ""
  }
};

export default Info;
