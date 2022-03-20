import React from 'react';
// import newTask from '../bottom-panel';
import TodoListItem from './todo-list-item/todo-list-item';
 const TodoList = ({ todos, onDeleted, onToggleDone, onToggleImportant }) => {
  // console.log(newValue);

  const elements = todos.map((item) => {
    
    const { label, id, ...itemProps } = item;

    return (
      
      <li key={id} className = "list-group-item">
        <TodoListItem {...item}
        // newValue = {newValue}
        // newValue={this.newValue}
        onDeleted={() => onDeleted(id)}
        onToggleDone={() => onToggleDone(id)} 
        onToggleImportant={() => onToggleImportant(id)}  />
        
      </li> 
    );

});

  return (
    <ul className="todo-list list-group">
      { elements }
    </ul> 
  );
};

export default TodoList;