import React from "react";

function CategoryFilter(props) {
  const { categories, onSelectCategory, activeCategory } = props;

  return (
    <div>
      <button onClick={() => onSelectCategory("All")} className={activeCategory === "All" ? "selected" : ""}>
        All
      </button>
      {categories.map((category) => (
        <button key={category} onClick={() => onSelectCategory(category)} className={activeCategory === category ? "selected" : ""}>
          {category}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;