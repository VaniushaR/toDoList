import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
//data from .json
import { ToDo } from './data.json';
import NewTask from './Components/NewTaskForm';
//console.log(ToDo);

class App extends Component {
  constructor() {
    super();
    this.state = {
      toDo: ToDo
    };
    this.handleAddToDo = this.handleAddToDo.bind(this);
  }

  //function to delete one by one task
  deleteTask(task) {
    this.setState({
      toDo: this.state.toDo.filter((e, i) => {
        return i !== task;
      })
    });
  }
  //function sended by props
  handleAddToDo(task) {
    this.setState({
      toDo: [...this.state.toDo, task]
    });
  }
  render() {
    console.log(toDo);
    const toDo = this.state.toDo.map((task, i) => {
      return (
        <div className="container" key={i}>
          <h3>{task.title}</h3>
          <h4>{task.priority}</h4>
          <h4>{task.responsible}</h4>
          <h5>{task.description}</h5>
          <button onClick={this.deleteTask.bind(this, i)}>Delete</button>
        </div>
      );
    });
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Today Vania's ToDo List</h1>
          <span>{this.state.toDo.length}</span>
        </header>
        <NewTask onAddToDo={this.handleAddToDo} />
        <div>{toDo}</div>
      </div>
    );
  }
}

export default App;
