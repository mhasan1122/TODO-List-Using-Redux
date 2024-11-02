import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AddTodoAction, RemoveTodoAction } from './actions/TodoActions';
import './App.css';

function App() {
  const [todo, setTodo] = useState('');
  const dispatch = useDispatch();

  // Select the todos from the Redux state
  const todos = useSelector((state) => state.Todo.todo || []); // Ensure to handle cases where todos might not be defined

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todo.trim()) { // Check to ensure the todo is not an empty string
      dispatch(AddTodoAction(todo));
      setTodo(''); // Clear the input after submission
    } else {
      console.error("Todo cannot be empty"); // Log error if todo is empty
    }
  };

  const handleDelete = (id) => {
    dispatch(RemoveTodoAction(id)); // Trigger remove action
  };

  return (
    <div className="App">
      <header className="App-header">
        <h2>Todo List App</h2>
        <form onSubmit={handleSubmit}>
          <input
            placeholder="Enter a Todo"
            value={todo} // Bind input value to state
            style={{
              width: 350,
              padding: 10,
              borderRadius: 20,
              border: "none",
              fontSize: 20,
            }}
            onChange={(e) => setTodo(e.target.value)}
          />
          <button
            type="submit"
            style={{
              padding: 12,
              borderRadius: 25,
              fontSize: 15,
              marginLeft: 20,
            }}
          >
            GO
          </button>
        </form>

        <ul className="allTodos">
          {Array.isArray(todos) && todos.map((t) => (
            <li key={t.id} className="singleTodo">
              <span className="todoText">{t.todo}</span>
              <button
                onClick={() => handleDelete(t.id)}
                style={{
                  borderRadius: 25,
                  padding: 10,
                  border: "1px solid white",
                  color: "white",
                  backgroundColor: "orangered",
                }}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App;
