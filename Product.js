import React from 'react';
import './Product.css';

const Product = ({ title, price, imageUrl }) => {
  let albumNumber = '';

  if (title === 'Colors') {
    albumNumber = '1';
  } else if (title === 'Black and white Colors') {
    albumNumber = '2';
  } else if (title === 'Yellow and Black Colors') {
    albumNumber = '3';
  } else if (title === 'Blue Color') {
    albumNumber = '4';
  }

  return (
    <div className="product">
      <h3 className="product-label">Album {albumNumber}</h3>
      <img src={imageUrl} alt={title} className="product-image" />
      <p className="product-price">${price}</p>
      <button className="add-to-cart">Add to Cart</button>
    </div>
  );
};

export default Product;
