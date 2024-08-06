import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button, Card, Typography } from 'antd';
import {addTodo , setFilter, toggleTodo} from './redux/actions.js'



// Component
const ComplexReduxStateComponent = () => {
  const todos = useSelector(state => state.todos);
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  const addRandomTodo = () => {
    const randomTodo = `Todo ${Math.floor(Math.random() * 1000)}`;
    dispatch(addTodo(randomTodo));
  };

  const filteredTodos = todos.filter(todo => {
    if (filter === 'ALL') return true;
    if (filter === 'ACTIVE') return !todo.completed;
    if (filter === 'COMPLETED') return todo.completed;
    return true;
  });
  console.log("Rendering Object Example");
  return (
    <Card className="w-full max-w-md mx-auto">
      <div>
        <Typography variant="h5">Complex Redux State Management</Typography>
      </div>
      <div>
        <div className="space-y-4">
          <div className="flex space-x-2">
            <Button onClick={addRandomTodo}>Add Random Todo</Button>
            <Button onClick={() => dispatch(setFilter('ALL'))}>All</Button>
            <Button onClick={() => dispatch(setFilter('ACTIVE'))}>Active</Button>
            <Button onClick={() => dispatch(setFilter('COMPLETED'))}>Completed</Button>
          </div>
          <ul className="space-y-2">
            {filteredTodos.map(todo => (
              <li key={todo.id} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => dispatch(toggleTodo(todo.id))}
                />
                <span className={todo.completed ? 'line-through' : ''}>{todo.text}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Card>
  );
};

export default ComplexReduxStateComponent;
