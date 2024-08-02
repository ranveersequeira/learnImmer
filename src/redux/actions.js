// Action Types
export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const SET_FILTER = 'SET_FILTER';

// Action Creators
export const addTodo = (text) => ({
  type: ADD_TODO,
  payload: { text }
});

export const toggleTodo = (id) => ({
  type: TOGGLE_TODO,
  payload: { id }
});

export const setFilter = (filter) => ({
  type: SET_FILTER,
  payload: { filter }
});

// Async Action Creator (example with Redux Thunk)
export const addTodoWithDelay = (text) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(addTodo(text));
    }, 1000); // 1 second delay
  };
};
