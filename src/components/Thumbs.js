import React from 'react';
import Thumb from './Thumb';

function Thumbs({images, receiveMainImage}) {
  return (
    <div className="thumbs" id="thumbs">
      {images.map( image =>{
        return <Thumb image={image} key={image.id} receiveMainImage={receiveMainImage} />;
      })}
    </div>
  );
}

export default Thumbs;
