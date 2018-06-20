import React from "react";

const Info = ({ user, conditions }) => {
  return (
    <div className="info">
      <p className="info__item info__item--conditions">{conditions}</p>
      <p className="info__item info__item--credits">
        <a href={user.url}>{user.name}</a>
        <span>on</span>
        <a href="#">Unsplash</a>
      </p>
    </div>
  );
};

Info.defaultProps = {
  conditions: "",
  credits: {
    userUrl: "",
    userName: ""
  }
};

export default Info;
