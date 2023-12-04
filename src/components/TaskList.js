import React from "react";
import { TASKS } from "../data";
import Task from "./Task";



function TaskList( {tasks, setDeletedTask, handleDelete } ) {

  const listOfTasks = tasks.map((task) => {
    return (
      <Task key={task.text} text={task.text} category={task.category} setDeletedTask={setDeletedTask} handleDelete={handleDelete} />
    )
  })

  return (
    <div className="tasks">
      {/* display a list of tasks using Task component */}
      {listOfTasks}
    </div>
  );
}

export default TaskList;
