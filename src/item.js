import React from 'react';

const Item = props => {
  return (
    <div>
      <p>Name : {props.el.Name}</p>
      <p>CountryCode : {props.el.CountryCode}</p>
      <p>Population : {props.el.Population}</p>
    </div>
  );
};

export default Item;
