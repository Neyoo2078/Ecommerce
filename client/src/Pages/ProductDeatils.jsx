import React from 'react';
import { useParams } from 'react-router-dom';

const ProductDeatils = () => {
  const { id } = useParams();
  return <div>{id}</div>;
};

export default ProductDeatils;
