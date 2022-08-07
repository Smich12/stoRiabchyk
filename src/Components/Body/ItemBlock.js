import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export class ItemBlock extends Component {
  render() {
    const { iconName, additionalIconProps } = this.props;
    return (
      <div className="serv">
        <FontAwesomeIcon
          icon={iconName}
          size="2x"
          className="highlight"
          {...additionalIconProps}
        />

        <i className="fa-solid fa-user"></i>
        <h3>{this.props.title}</h3>
        <p>{this.props.desc}</p>
      </div>
    );
  }
}
