import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
  const { productId } = useParams();
  const product = useSelector((state) =>
    state.products.items.find((product) => product.id === Number(productId))
  );

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="p-4">
      <h2 className="mt-4 text-2xl font-bold">{product.title}</h2>
      <p className="mt-4">{product.body}</p>
    </div>
  );
};

export default ProductDetail;
