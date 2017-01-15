import React from 'react';

const Card = (props) => {
  return (
    <img
      src={props.src}
      width={props.width}
      height={props.height}
    />
  );
};

export default Card;
