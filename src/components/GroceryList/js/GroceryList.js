import React from 'react';
import GroceryItem from './GroceryItem.js';

// Fetch grocery list data
import { groceryList } from '../../../data/grocery-list.js';

export default function GroceryList() {
  return (
    <section className='grocery-list'>
      <div className='wrapper'>
        <div className='product-container'>
          {/* Loop for each Grocery Item */}
          {groceryList.map((product) => {
            return <GroceryItem product={product} />;
          })}
        </div>
      </div>
    </section>
  );
}
