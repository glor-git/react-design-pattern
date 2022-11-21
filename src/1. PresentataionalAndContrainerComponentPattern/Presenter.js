import React from 'react';

function Presenter({ state }) {

  return (
    <ul>
      {state.map(({ id, skill }) => (
        <li key={id}>
          {id}-{skill}
        </li>
      ))}
    </ul>
  );
}

export default Presenter;