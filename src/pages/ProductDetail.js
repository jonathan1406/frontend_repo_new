import React from 'react';
import { useParams } from 'react-router-dom';

function ProductDetail() {
  const { id } = useParams();
  // Fetch product details by ID or use context/state
  return (
    <div>
      <h1>Product {id}</h1>
      {/* Render product details here */}
    </div>
  );
}

export default ProductDetail;
