import React, { Component } from "react";
import "./Cell.css";

class Cell extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(evt) {
    // call up to the board to flip cells around this cell
    this.props.flipCellsAroundMe();
  }

  render() {
    let cellClasses = "Cell" + (this.props.isLit ? " Cell-lit" : "");

    return <td className={cellClasses} onClick={this.handleClick} />;
  }
}

export default Cell;
