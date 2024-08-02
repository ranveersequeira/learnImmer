import React, { useState } from 'react';
import {produce} from 'immer'
import { List, Input, Button, Checkbox } from 'antd';

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const addTodo = () => {
    if (inputValue.trim() !== '') {
      //NORMAL
      setTodos([
        ...todos,
        { text: inputValue, complete: false, details: { priority: false, urgent: false } }
      ]);


      //IMMER
      // setTodos(
      //   produce((draft) => {
      //     draft.push({ text: inputValue, complete: false, details: { priority: false, urgent: false } });
      //   })
      // );
      //OR 
      // const newTodos = produce(todos, draft => {
      //   draft.push({ text: inputValue, complete: false, details: { priority: false, urgent: false } });
      //   return draft
      // })
      setInputValue('');
    }
  };

  const toggleComplete = (index) => {
    //NORMAL
    const newTodos = [...todos];
    newTodos[index].complete = !newTodos[index].complete;


    //IMMER
    // setTodos(
    //   produce((draft) => {
    //     draft[index].complete = !draft[index].complete;
    //   })
    // );
    //OR 
    // const newTodos = produce(todos, draft => {
    //   draft[index].complete = !draft[index].complete;
    //   return draft
    // })


    setTodos(newTodos);
  };

  const togglePriority = (index) => {
    //NORMAL
    const newTodos = [...todos];
    newTodos[index].details.priority = !newTodos[index].details.priority;


    //IMMER 
    // setTodos(
    //   produce((draft) => {
    //     draft[index].details.priority = !draft[index].details.priority;
    //   })
    // );
    //OR 
    // const newTodos = produce(todos, draft => {
    //   draft[index].details.priority = !draft[index].details.priority;
    //   return draft
    // })
    setTodos(newTodos);
  };

  const toggleUrgent = (index) => {
    //NORMAL
    const newTodos = [...todos];
    newTodos[index].details.urgent = !newTodos[index].details.urgent;


    //IMMER
    // setTodos(
    //   produce((draft) => {
    //     draft[index].details.urgent = !draft[index].details.urgent;
    //   })
    // );
    //OR 
    // const newTodos = produce(todos, draft => {
    //   draft[index].details.urgent = !draft[index].details.urgent;
    //   return draft
    // })
    setTodos(newTodos);
  };

  return (
    <div style={{ maxWidth: '400px', margin: '0 auto' }}>
      <Input
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onPressEnter={addTodo}
        placeholder="Add a new task"
      />
      <Button type="primary" onClick={addTodo} style={{ marginTop: '10px' }}>
        Add Todo
      </Button>
      <List
        style={{ marginTop: '20px' }}
        bordered
        dataSource={todos}
        renderItem={(item, index) => (
          <List.Item>
            <Checkbox
              checked={item.complete}
              onChange={() => toggleComplete(index)}
            >
              <span style={{ textDecoration: item.complete ? 'line-through' : 'none' }}>
                {item.text}
              </span>
            </Checkbox>
            <div style={{ marginLeft: 'auto' }}>
              <Checkbox
                checked={item.details.priority}
                onChange={() => togglePriority(index)}
              >
                Priority
              </Checkbox>
              <Checkbox
                checked={item.details.urgent}
                onChange={() => toggleUrgent(index)}
              >
                Urgent
              </Checkbox>
            </div>
          </List.Item>
        )}
      />
    </div>
  );
};

export default TodoList;
