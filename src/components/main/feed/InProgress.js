import React, { Component } from "react";
import FontAws from "../../UI/FontAws";
import Tasks from "./Tasks";


export default class InProgress extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [
        {
          id: 1,
          title: "im title",
          description: "taday i need to go doctoctor"
        },
        {
          id: 2,
          title: "im title",
          description: "taday i need to go doctoctor"
        },
        {
          id: 3,
          title: "im title",
          description: "taday i need to go doctoctor"
        }
      ],
      fontaws: ["fas fa-check-circle", "fas fa-comment-alt", "fas fa-paperclip"]
    };
  }
  render() {
    const { className } = this.props;
    const { tasks, fontaws } = this.state;
    return (
      <div className={className.column}>
        <div className = {className.header}>
          <span>in progress</span>
          <FontAws fontName="fas fa-sticky-note">
            <span>Today</span>
          </FontAws>
        </div>
        <Tasks className={className} tasks={tasks} fontaws={fontaws} />
      </div>
    );
  }
}
