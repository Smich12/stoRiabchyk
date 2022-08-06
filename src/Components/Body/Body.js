import React, { Component } from "react";
import { ImageBlock } from "./ImageBlock";
import "./Body.scss";

export class Body extends Component {
  render() {
    return (
      <div className="body">
        <ImageBlock />
      </div>
    );
  }
}
