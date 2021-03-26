import React from "react";
import PropTypes from "prop-types";
import "./Button.css";


export default class Button extends React.Component {
  static propTypes = {
    name: PropTypes.string,
    red: PropTypes.bool,
    blue: PropTypes.bool,
    wide: PropTypes.bool,
    display: PropTypes.bool,
    gray: PropTypes.bool,
    clickHandler: PropTypes.func,
  };

  handleClick = () => {
    this.props.clickHandler(this.props.name);
  };

  render() {
    const className = [
      "component-button",
      this.props.red ? "red" : "",
      this.props.blue ? "blue" : "",
      this.props.wide ? "wide" : "",
      this.props.gray ? "gray" : "",
      this.props.display ? "display" : "",
    ];

    return (
      <div className={className.join(" ").trim()}>
        <button onClick={this.handleClick}>{this.props.name}</button>
      </div>
    );
  }
}