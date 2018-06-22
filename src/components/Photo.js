import React from 'react';

function Photo({mainImage}) {
  return (
    <figure className="photo" id="photo">
      <img src={mainImage} />
    </figure>
  );
}

export default Photo;
