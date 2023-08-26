import React, { useReducer } from 'react';
import Input from './Input';
import List from './List';

const initialState = {
  todos: [
    'breakfast',
    'lunch',
    'snacks',
    'Dinner'
  ],
  editData: {
    index: '',
    data: ''
  }
};

function reducer(state, action) {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        ...state,
        todos: [...state.todos, action.payload]
      };
    case 'DELETE_TODO':
      return {
        ...state,
        todos: state.todos.filter((todo) => todo !== action.payload)
      };
    case 'EDIT_TODO':
      return {
        ...state,
        editData: {
          index: action.payload.index,
          data: action.payload.data
        }
      };
    case 'UPDATE_TODO':
      const updatedTodos = state.todos.map((todo, index) =>
        index === state.editData.index ? action.payload : todo
      );
      return {
        todos: updatedTodos,
        editData: {
          index: '',
          data: ''
        }
      };
    default:
      return state;
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="container">
      <Input state={state} dispatch={dispatch} />
      <List state={state} dispatch={dispatch} />
    </div>
  );
}

export default App;
