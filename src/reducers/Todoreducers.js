export const TodoReducer = (state = { todo: [] }, action) => {
    switch (action.type) {
      case "ADD_TODO":
        // Add new todo item to the array
        return { todo: [...state.todo, action.payload] };
  
      case "REMOVE_TODO":
        // Remove a todo item based on id
        return { todo: state.todo.filter(t => t.id !== action.payload) };
  
      default:
        // Return the current state to avoid returning undefined
        return state;
    }
  };
  