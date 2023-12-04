import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });





function App() {
  const [tasks, setTasks] = useState(TASKS);
  const [deletedTask, setDeletedTask] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("All");

function onTaskFormSubmit(newTaskSubmit) {
  setTasks([...tasks, newTaskSubmit]);
}


function handleDelete(deletedTask) {
  let removeTasks = tasks.filter((task) => task.text !== deletedTask)
  setTasks(removeTasks);
}

const filteredCategories = tasks.filter((task) => {
if (categoryFilter === "All") {
  return task
} else {
  console.log(categoryFilter)
  return task.category === categoryFilter
}}
)


  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} setCategoryFilter={setCategoryFilter} categoryFilter={categoryFilter}/>
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={onTaskFormSubmit} />
      <TaskList setDeletedTask={setDeletedTask} handleDelete={handleDelete}
      tasks={filteredCategories} />
    </div>
  );
}

export default App;
