import React from 'react';

import styled from 'styled-components';

import ToDoList from './components/ToDoList.js';
import ToDoForm from './components/ToDoForm.js';

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
  toggleTask = taskId => {
    console.log(taskId);
    this.setState({
      todos: this.state.todos.map(task => {
        if(taskId === task.id){
          return{
            ...task,
            completed: !task.completed
          };
        };
        return task;
      })
    });
  };

  addTask = task => {
    const newToDo = {
      task: task,
      id: Date.now(),
      completed: false
    };
    this.setState({
      todos: 
      [...this.state.todos, newToDo]
    });
  };

  clearCompleted = e => {
    e.preventDefault();
    this.setState({
      todos: this.state.todos.filter(task => !task.completed)
    });
  };

  render() {
    return (
      <AppContainer>
        <Header>
          <h1>To Do List</h1>
          <ToDoForm addTask={this.addTask}/>
        </Header>
        <ToDoList
          todos= {this.state.todos}
          toggleTask={this.toggleTask}
          clearCompleted={this.clearCompleted}
        />
      </AppContainer>
    );
  };
};

export default App;

const AppContainer = styled.div `
  text-align: center;
  margin: 1rem;
  background: rgba(128, 128, 128, 0.5);
`
const Header = styled.div `
  display: flex;
  justify-content: space-between;
  align-items: center;
  opacity: 1;

  h1 {
    text-align: left;
    padding-left: 2rem;
    color: white;
    font-size: 1.5rem;
  }
`