import React from 'react';
import { groceryList } from '../../../data/grocery-list.js';

// Fetch Grocery List Data
import '../css/grocery-list.css';

export default function GroceryList() {
  return (
    <section className='wrapper'>
      <div className='product-container'>
        {/* Loop for each Grocery Item */}
        {groceryList.map((product) => {
          return (
            <article
              key={product.id}
              className='product accent-border bg-default'
            >
              {/* Product Qty */}
              <div className='product-qty'>
                <span className='uppercase bold accent-text'>
                  Qty: {product.qty}
                </span>
              </div>

              {/* Product Item */}
              <header className='product-header bold'>{product.item}</header>

              {/* Product Brand and Description */}
              <div className='product-description'>
                {product.brand} {product.type}
              </div>

              {/* Product Category */}
              <footer className='product-footer uppercase bold accent-text'>
                {product.category}
              </footer>
            </article>
          );
        })}
      </div>
    </section>
  );
}
