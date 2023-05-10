import React from 'react';

const Image = (props) =>{
    return <img 
    src = {props.imgsrc}
    alt = "pic" 
    className = "card__image"
  />;
}

export default Image;