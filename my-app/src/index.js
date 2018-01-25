import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

class TaskItem extends React.Component {

  checkboxCheck(task){
    if (task.completed){
      return "checked";
    } else {
      return "";
    }
  }

  render() {
    var task = this.props.task;
    return (
      <li>
        <span>{task.name}</span>
        <input type="checkbox"
          defaultChecked={this.checkboxCheck(task)}
          onChange={this.props.markTaskComplete}/>
        <button
          onClick={this.props.removeTask}> Remove </button>
      </li>
    );
  }
}

class TaskList extends Component {
  markTaskCompleted(task){
    console.log('task' + task.name + 'has been completed!');
  }

  removeTask(task){
    console.log('task' + task.name + 'has been removed!')
  }

  render() {
    var taskItems = this.props.tasks.map(function (task, index){
      return <TaskItem task={task} key={index}
      markTaskCompleted={this.markTaskCompleted(task)}
      removeTask={this.removeTask(task)}/>
     }.bind(this));
    return (
      <ul>
        {taskItems}
      </ul>
    );
  }
}

var tasks = [
  {name: 'write this book with love', completed: false},
  {name: 'learn isomorphic web apps', completed: false},
  {name: 'study FLUX architecture', completed: true}
];

ReactDOM.render(<TaskList tasks={tasks} />, document.getElementById('root'));
registerServiceWorker();
