import React, { useState } from 'react';
import './Todo.css'
const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [taskAdded, setTaskAdded] = useState(false);
  const [taskRemoved, setTaskRemoved] = useState(false);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleAddTodo();
    }
  };

  const handleAddTodo = () => {
    if (inputValue.trim() !== '') {
      setTodos([...todos, inputValue]);
      setInputValue('');
      setTaskAdded(true); // Set taskAdded to true
      setTimeout(() => {
        setTaskAdded(false); // Reset taskAdded after 2 seconds
      }, 2000);
    }
  };

  const handleRemoveTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
    setTaskRemoved(true);
    setTimeout(() => {
        setTaskRemoved(false)
    } , 2000)
  };

  return (
    <div className="container">
        {taskAdded && <p className="task-added-message">Task added! 🎉</p>}
        {taskRemoved && <p className="task-removed-message">Task Removed! ☠️</p>}
      <h1 className="heading">Todo List</h1>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        className="input"
      />
      <button onClick={handleAddTodo} className="add-button">
        Add Todo
      </button>
      
      <ul className="todo-list">
        {todos.map((todo, index) => (
          <li key={index} className="todo-item">
            <span>{todo}</span>
            <button
              onClick={() => handleRemoveTodo(index)}
              className="remove-button"
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
