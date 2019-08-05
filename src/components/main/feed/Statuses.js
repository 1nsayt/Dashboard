import React, { Component } from "react";
import FontAws from "../../UI/FontAws";

export default class Statuses extends Component {
  render() {
    const { statuses,className } = this.props;
    return (
      <div className={className}>
        {statuses.map(status => (
          <FontAws fontName={status} />
        ))}
      </div>
    );
  }
}
