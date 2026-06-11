import React from 'react';

export function CategoryList() {
  const categories = ['Casual Wear', 'Formal Attire', 'Accessories', 'Footwear'];

  return (
    <div className="categories-section">
      <h2>Browse Categories</h2>
      <div className="category-container">
        {categories.map((cat, index) => (
          <div key={index} className="category-card">
            {cat}
          </div>
        ))}
      </div>
    </div>
  );
}