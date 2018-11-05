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
        <div className="item" key={i}>
          <div>
            {' '}
            <h3>Task: {task.title}</h3>
          </div>

          <div>
            <h4>
              Priority:
              {task.priority}
            </h4>{' '}
          </div>

          <div>
            {' '}
            <h4>
              Responsible:
              {task.responsible}
            </h4>{' '}
          </div>

          <div>
            <h5>
              Description:
              {task.description}
            </h5>{' '}
          </div>

          <div>
            {' '}
            <button onClick={this.deleteTask.bind(this, i)}>Delete</button>
          </div>
        </div>
      );
    });
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Today Vania's ToDo List </h1>
          <div className="total">
            <h2>Tasks: {this.state.toDo.length}</h2>
            <img src={logo} className="App-logo" alt="logo" />
          </div>
        </header>
        <NewTask onAddToDo={this.handleAddToDo} />
        <div className="container">{toDo}</div>
        <div className="footer">Vania Ramírez 2018</div>
      </div>
    );
  }
}

export default App;
