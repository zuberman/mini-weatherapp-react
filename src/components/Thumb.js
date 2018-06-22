import React from 'react';

function Thumb({image, receiveMainImage}) {

  function handleClick(event){
    event.preventDefault();

    receiveMainImage(image.urls.regular, image.user);
  }

  return (
    <a
      id={image.id}
      onClick={handleClick}
      href={image.links.html}
      className="thumbs__link active">
        <img src={image.urls.thumb} alt="clear sky" className="thumbs__link__img" />
    </a>
  );
}

export default Thumb;
