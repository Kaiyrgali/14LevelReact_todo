import React from 'react';

function AppHeader({ todos }) {
  const countDone = todos.filter((item) => item.done === true).length;
  const countToDo = todos.length - countDone;

  return (
    <div className="app-header">
      <h1>My Todo List</h1>
      <h2>
        {countToDo}
        {' '}
        more to do,
        {' '}
        {countDone}
        {' '}
        done
      </h2>
    </div>
  );
}

export default AppHeader;
