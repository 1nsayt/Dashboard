import React, { Component } from "react";

export default class FontAws extends Component {
  render() {
    const { fontName, color } = this.props;
    return (
      <i className={color ? `${color} ${fontName}` : `${fontName}`}>
        {this.props.children}
      </i>
    );
  }
}
