import React from "react";

function CategoryFilter({ categories, setCategoryFilter, categoryFilter }) {

  function handleClick(category) {
    setCategoryFilter(category);
    console.log(category);
  }

  console.log(categories);
  const filterCategories = categories.map((category) => 
  <button
  className={category === categoryFilter ? "selected" : null }
   onClick={() => handleClick(category)} key={category}>{category}</button>)

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {filterCategories}
    </div>
  );
}

export default CategoryFilter;
