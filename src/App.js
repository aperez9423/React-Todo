import React from 'react';

import ToDoList from './ToDoList.js';
import ToDoForm from './ToDoForm.js';

const todos =[
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  constructor() {
  // design `App` to be the parent component of your application.
    super();
    this.state = {
      todos
    };
  }
  // this component is going to take care of state, and any change handlers you need to work with your state
  toggleItem = itemId => {
    console.log(itemId);
    this.setState({
      todos:this.state.groceries.map(item => {
        if(itemId === item.id){
          return{
            ...item,
            completed: !item.completed
          };
        };
        return item;
      })
    });
  };

  addItem = item => {
    const newToDo = {
      name: item,
      id:Date.now(),
      completed: false
    };
    this.setState({
      todos: 
      [...this.state.todos, newToDo]
    });
  };

  clearPurchased = e => {
    e.preventDefault();
    this.setState({
      todos: 
      this.state.todos.filter(item => !item.completed)
    });
  };

  render() {
    return (
      <div className='App'>
        <div className='header'>
          <h1>ToDo List</h1>
          <ToDoForm addItem={this.addItem}/>
        </div>
        <ToDoList
          todos= {this.state.todos}
          toggleItem={this.toggleItem}
          clearPurchased={this.clearPurchased}
        />
      </div>
    );
  };
};

export default App;