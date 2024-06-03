import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  return (
    <div className="border p-4 rounded-md shadow-md">
      <h3 className="mt-2 text-lg font-bold">{product.title}</h3>
      <Link to={`/product/${product.id}`} className="text-blue-500 mt-2 block">Подробнее</Link>
    </div>
  );
};

export default ProductCard;
