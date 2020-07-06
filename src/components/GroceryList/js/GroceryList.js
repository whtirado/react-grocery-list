import React from 'react';

// Fetch grocery list data
import { groceryList } from '../../../data/grocery-list.js';

export default function GroceryList() {
  return (
    <section className='grocery-list'>
      <div className='wrapper'>
        <div className='product-container'>
          {/* Loop for each Grocery Item */}
          {groceryList.map((product) => {
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
          })}
        </div>
      </div>
    </section>
  );
}
