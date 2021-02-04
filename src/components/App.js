import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [selectedCat, setSelectedCat] = useState("All")
  const [taskList, setTaskList] = useState(TASKS)

  function changeSelectedCat(category) {
    let newTaskList
    setSelectedCat(category)
    if (selectedCat === "All") {
      newTaskList = TASKS
    } else {
      newTaskList = TASKS.filter((task) => task.category === selectedCat)
    }
    setTaskList(newTaskList)
  }

  // setTaskList(taskList.filter(task => task.category === selectedCat))

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter allCats={CATEGORIES} selectedCat={selectedCat} setSelectedCat={changeSelectedCat} />
      <NewTaskForm />
      <TaskList allTasks={taskList} />
    </div>
  );
}

export default App;
