import React, {Component} from "react";
  
export default class TodoListItem extends Component {
   
  
   render() {
    // console.log (0)

    const { label, onDeleted,
          onToggleDone, onToggleImportant,
        done, important, newValue } = this.props;
    let classNames = 'todo-list-item';
    if (done) {
        classNames += " done"
      }; 
    if (important) {
      classNames += ' important';  
      };
    if (newValue) {
      console.log(newValue);
    }
      
    return (
      <span className={classNames}>
        <span className="todo-list-item-label"
              onClick={onToggleDone}
        >
              { label }
        </span>
        <button type="button"
                className="material-icons btn btn-outline-success  btn-sm float-right"
                onClick={onToggleImportant}>
                priority_high
        </button>
        <button type="button"
                className="material-icons btn btn-outline-danger  btn-sm float-right"
                onClick={onDeleted}>
                delete_forever
        </button>
      </span>
    );
};
}
