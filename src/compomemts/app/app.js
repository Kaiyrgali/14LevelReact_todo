import React, {Component} from 'react';
import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import AppBottom from '../bottom-panel';
// import ItemStatusFilter from '../item-status-filter';

export default class App extends Component {
  
  count = 4;

  state = {
    todoData: [ //база исходных данных
      this.createTodoItem('Drink Coffee'),
      this.createTodoItem('Make Awesome App'),
      this.createTodoItem('Have a lunch'),    
        // {label: 'Drink Coffee', important: true, id: 1, done: true},
        // {label: 'Make Awesome App', important: true, id: 2, done: false},
        // {label: 'Have a lunch', important: false, id: 3, done: true}
    ],
    term: "",
    filter: 'all'
  };
  
  createTodoItem(label) {
     return {
       label,
       important: false,
       id: this.count++,
       done: false
     }
  }
  deleteItem = (id) => {
    this.setState(({todoData})=> {
      const idx = todoData.findIndex((el) => el.id === id);
      const before = todoData.slice(0, idx);
      const after = todoData.slice(idx+1);
      const newArray = [...before, ...after];
      // console.log(newArray);
      // console.log(newArray);
      // console.log(newArray);
      return {
        todoData: newArray
      }
    });
  };

    addItem = () => {
      this.setState(({todoData, count})=> {
        const form = document.querySelector('#bottomForm');
        const formData = new FormData(form);
        const newTask = formData.get('idText');
        if (newTask !== "") {
          form.reset();
          // console.log('return')
          // console.log('new!', newTask);
          // console.log(todoData.length);
          const addArray = this.createTodoItem(newTask)
          // const newCount = count +1; 
          const newArray = [...todoData, addArray];
          // console.log (newArray);
          return {
            todoData: newArray
            // count: newCount
          }
        }
      });
    }

  toggleProperty(arr, id, propName ) {
    const idx = arr.findIndex((el) => el.id === id);
    console.log(idx);
    const oldItem = arr[idx];
    const newItem = {...oldItem, [propName]: !oldItem[propName]};
    
    return [
      ...arr.slice(0, idx),
      newItem,
      ...arr.slice(idx+1)
    ];
  }

  onToggleImportant = (id) => {
    this.setState(({todoData}) => {
      return {
        todoData: this.toggleProperty(todoData, id, 'important')
      };
    });  
  }

  onToggleDone = (id) => {
    this.setState(({todoData}) => {
      return {
        todoData: this.toggleProperty(todoData, id, 'done')
      };
    }); 
  }

  filterBySearch = (eText) => {
    this.setState(({todoData}) => {
    const newValue = String (eText.target.value);
    console.log(newValue);

    return {
      term: newValue
    }
  });
    // this.setState(({todoData}) => {
    //   return {
    //     todoData: 
    //   };
  };

  onFilterChange = (filter) => {
    this.setState({filter});
  };

  search(items, term) {
    if (term.length === 0 ) {
      return items;
    }
    return items.filter((item) => {
      return item.label.toLowerCase().indexOf(term.toLowerCase()) > -1;
    });
  }

  filter (items, filter) {
    switch(filter) {
      case 'all': 
        return items;
      case 'active': 
        return items.filter((item) => !item.done);
      case 'done': 
        return items.filter((item) => item.done);
      default:
        return items;
    }
  }

    render() {
      const {todoData, term, filter} = this.state;
      const visibleItems = this.filter(this.search(todoData, term), filter);
      return (
      <div className="todo-app"> 
          <AppHeader todos={this.state.todoData} /> 
          <SearchPanel filter={this.state.filter}
          onFilterChange={this.onFilterChange} />
          <TodoList todos={visibleItems}
          newValue={this.newValue}
          onDeleted = { this.deleteItem} 
          onToggleImportant = {this.onToggleImportant}
          onToggleDone = {this.onToggleDone}
          />
          <AppBottom count = {this.state.count}
                    addItem = { this.addItem} />
      </div>
  );
  }
}
