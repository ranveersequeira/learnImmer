import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import {thunk} from 'redux-thunk';
import { produce } from 'immer';

const ADD_TODO = 'ADD_TODO';
const TOGGLE_TODO = 'TOGGLE_TODO';
const SET_FILTER = 'SET_FILTER';

const initialState = {
  todos: [],
  filter: 'ALL'
};


//NORMAL
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            id: state.todos.length + 1,
            text: action.payload.text,
            completed: false
          }
        ]
      };
    case TOGGLE_TODO:
      return {
        ...state,
        todos: state.todos.map(todo =>
          todo.id === action.payload.id
            ? { ...todo, completed: !todo.completed }
            : todo
        )
      };
    case SET_FILTER:
      return {
        ...state,
        filter: action.payload.filter
      };
    default:
      return state;
  }
};






// Reducer with Immer
const rootReducerImmer = produce((draft, action) => {
  switch (action.type) {
    case ADD_TODO:
      draft.todos.push({
        id: draft.todos.length + 1,
        text: action.payload.text,
        completed: false
      });
      break;
    case TOGGLE_TODO:
      const todo = draft.todos.find(todo => todo.id === action.payload.id);
      if (todo) {
        todo.completed = !todo.completed;
      }
      break;
    case SET_FILTER:
      draft.filter = action.payload.filter;
      break;
    // No default case needed
  }
});

// Create store
const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
