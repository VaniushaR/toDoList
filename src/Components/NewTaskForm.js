import React, { Component } from 'react';

class NewTask extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
      responsible: '',
      priority: 'low',
      description: ''
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  //function to submit the new task
  handleSubmit(e) {
    e.preventDefault();
    this.props.onAddToDo(this.state);
    this.setState({
      title: '',
      responsible: '',
      priority: 'low',
      description: ''
    });
  }

  handleInputChange(e) {
    const { value, name } = e.target;
    console.log(value, name);
    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <div className="form">
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="title"
            value={this.state.title}
            onChange={this.handleInputChange}
            placeholder="New Task"
          />
          <input
            type="text"
            name="responsible"
            value={this.state.responsible}
            onChange={this.handleInputChange}
            placeholder="Responsible"
          />
          <input
            type="text"
            name="description"
            value={this.state.description}
            onChange={this.handleInputChange}
            placeholder="Description"
          />
          <select
            name="priority"
            value={this.state.priority}
            onChange={this.handleInputChange}
          >
            <option>low</option>
            <option>medium</option>
            <option>high</option>
          </select>
          <button type="submit">Save</button>
        </form>
      </div>
    );
  }
}

export default NewTask;
