export const AddTodoAction = (todo) => (dispatch, getState) => {
    const {
      Todo: { todo: todos },
    } = getState();
  
    const hasTodo = todos.find((i) => i.todo === todo);
  
    if (!hasTodo && todo !== '') {
      dispatch({
        type: "ADD_TODO",
        payload: { id: Date.now(), todo }, // Create a unique id using Date.now()
      });
    }
  };
  
  export const RemoveTodoAction = (id) => (dispatch, getState) => {
    const {
      Todo: { todo: todos },
    } = getState();
  
    dispatch({
      type: "REMOVE_TODO",
      payload: id, // Send the id of the todo to remove
    });
  };
  