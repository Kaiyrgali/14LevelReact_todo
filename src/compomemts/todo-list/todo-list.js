import React from 'react';
import TodoListItem from './todo-list-item/todo-list-item';

function TodoList({
  todos, onDeleted, onToggleDone, onToggleImportant,
}) {

  const elements = todos.map((item) => {
    const { label, id, ...itemProps } = item;

    return (
      <li key={id} className="list-group-item">
        <TodoListItem
          {...item}
          onDeleted={() => onDeleted(id)}
          onToggleDone={() => onToggleDone(id)}
          onToggleImportant={() => onToggleImportant(id)}
        />
      </li>
    );
  });

  return (
    <ul className="todo-list list-group">
      { elements }
    </ul>
  );
}

export default TodoList;
