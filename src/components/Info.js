import React from 'react';

function Info({user}) {
  return (
    <div className="info">
      <p className="info__item info__item--conditions" id="conditions"></p>
      <p className="info__item info__item--credits">

        <a href={user.links.html} id="credit-user">{user.name}</a>
        <span>on</span>
        <a href="#" id="credit-platform">Unsplash</a>
      </p>
    </div>
  );
}

export default Info;
