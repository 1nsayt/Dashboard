import React, { Component } from "react";
import FontAws from "../../UI/FontAws";
import Statuses from "./Statuses";

export default class Task extends Component {
  render() {
    const { fontaws, title, description } = this.props;
    const { task, text, statuses } = this.props.className;
    return (
      <li className = {task}>
        <FontAws fontName="fas fa-comment" />
        <div className = {text}>
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
        <Statuses statuses={fontaws}
                  className = {statuses} />
      </li>
    );
  }
}
