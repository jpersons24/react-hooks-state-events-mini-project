import React, {useState} from "react";
import Task from "./Task.js"

function TaskList({ allTasks }) {

  // console.log(allTasks)
  const taskComponents = allTasks.map(task => {
    return <Task key={task.text} text={task.text} category={task.category} onDeleteClick={handleDelete} />
  })

  // .filter(task => {return task.category === "Food"})

  function handleDelete() {
    console.log(allTasks)
  }

  return (
    <div className="tasks">
      {taskComponents}
    </div>
  );
}

export default TaskList;
