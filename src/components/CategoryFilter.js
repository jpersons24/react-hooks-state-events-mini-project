import React, {useState} from "react";

function CategoryFilter({ allCats, selectedCat, setSelectedCat }) {

  function handleClick(category) {
    setSelectedCat(category)
    console.log(category)
    console.log(selectedCat)
  }
  
  const catBtns = allCats.map(category => {
    return (
    <button key={category} onClick={() => handleClick(category)} className={selectedCat === category ? "selected" : null} >
      {category}
    </button>)
  })

  // function handleClick(category) {
  //   setSelectedCat(category)
  //   console.log(category)
  //   console.log(selectedCat)
  // }

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {catBtns}
    </div>
  );
}

export default CategoryFilter;
