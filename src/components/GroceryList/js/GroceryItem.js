import React from 'react';

export default function GroceryItem({ product }) {
  return (
    <article key={product.id} className='product'>
      {/* Product Qty */}
      <div className='product-qty'>
        <span className='uppercase bold'>Qty: {product.qty}</span>
      </div>

      {/* Product Item */}
      <header className='product-header bold'>{product.item}</header>

      {/* Product Brand and Description */}
      <div className='product-description'>
        {product.brand} {product.type}
      </div>

      {/* Product Category */}
      <footer className='product-footer uppercase bold'>
        {product.category}
      </footer>
    </article>
  );
}
