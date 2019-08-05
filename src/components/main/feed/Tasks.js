import React, { Component } from "react";
import Task from "./Task";

export default class Tasks extends Component {
  render() {
    const { className, tasks, fontaws } = this.props;
    return (
      <ul className={className.tasks}>
        {tasks.map(task => (
          <Task
            className = {className}
            title = {task.title}
            description = {task.description}
            fontaws = {fontaws}
          />
        ))}
      </ul>
    );
  }
}
