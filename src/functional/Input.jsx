import React, { useState } from 'react';

function Input({ state, dispatch }) {
  const [todo, setTodo] = useState('');
  const [error, setError] = useState(false);

  const changeInput = (event) => {
    setTodo(event.target.value);
    setError(event.target.value.length === 0);
  };

  const submit = (event) => {
    event.preventDefault();

    if (todo.length > 0) {
      if (state.editData.index !== '') {
        dispatch({ type: 'UPDATE_TODO', payload: todo });
      } else {
        dispatch({ type: 'ADD_TODO', payload: todo });
      }
    } else {
      setError(true);
    }

    setTodo('');
  };

  return (
    <form className="row mt-4" onSubmit={submit}>
      <div className="col-10">
        <input
          type="text"
          className="form-control"
          placeholder="Add todo"
          value={todo}
          onChange={changeInput}
        />
        {error && <p className="text-danger">Please Enter the todo</p>}
      </div>
      <div className="col-2">
        <button type="submit" className="btn btn-primary mb-3">
          {state.editData.index === '' ? 'ADD' : 'UPDATE'}
        </button>
      </div>
    </form>
  );
}

export default Input;
