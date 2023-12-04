import React, { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit  }) {

  const [newTaskText, setNewTaskText] = useState("");
  const [newTaskCategory, setNewTaskCategory] = useState("");

  const categoryOption = categories.map(category => (
    category !== "All" ? <option key={category}>{category}</option> : null
  ))
  
console.log(categoryOption);


  function handleTaskTextInput(event) {
    setNewTaskText(event.target.value);
  }

  function handleCategoryInput(event) {
    setNewTaskCategory(event.target.value);
  }
  
  function handleSubmit(event) {
    event.preventDefault();
    const newTaskSubmit = {
      text: newTaskText,
      category: newTaskCategory,
    }
    onTaskFormSubmit(newTaskSubmit);
    setNewTaskText("");
    setNewTaskCategory("");
  };




  return (
    <form onSubmit={handleSubmit} className="new-task-form">
      <label>
        Details
        <input type="text" name="text" onChange={handleTaskTextInput} />
      </label>
      <label>
        Category
        <select name="category" onChange={handleCategoryInput} >
          {categoryOption}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
