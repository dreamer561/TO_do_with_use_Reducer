import React from 'react';

function List({ state, dispatch }) {
  return (
    <ul className="list-group">
      {state.todos.length > 0 ? (
        state.todos.map((value, index) => (
          <li className="list-group-item d-flex justify-content-between" key={index}>
            <div>{value}</div>
            <div>
              <button
                className="btn btn-warning mx-2"
                onClick={() => dispatch({ type: 'EDIT_TODO', payload: { index, data: value } })}
              >
                Edit
              </button>
              <button
                className="btn btn-danger"
                onClick={() => dispatch({ type: 'DELETE_TODO', payload: value })}
              >
                Delete
              </button>
            </div>
          </li>
        ))
      ) : (
        <li className="list-group-item">No Todo</li>
      )}
    </ul>
  );
}

export default List;
