import React, {useState} from "react";

function CategoryFilter({ allCats, selectedCat, setSelectedCat }) {
  
  const catBtns = allCats.map(category => {
    return (
    <button onClick={() => handleClick(category)} className={selectedCat === category ? "selected" : null} >
      {category}
    </button>)
  })

  function handleClick(category) {
    setSelectedCat(category)
  }

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {catBtns}
    </div>
  );
}

export default CategoryFilter;
