import React from "react";

function Task({ category, text, onDeleteClick}) {
  
  function handleBtnClick(event) {
    console.log(event.target)
    onDeleteClick()
  }

  return (
    <div className='task' >
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete" onClick={handleBtnClick}>X</button>
    </div>
  );
}

export default Task;
