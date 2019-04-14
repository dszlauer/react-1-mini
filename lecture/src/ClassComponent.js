import React, { Component } from "react";

//statefull component
export default class ClassComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <div>This is my Class Component</div>;
  }
}
