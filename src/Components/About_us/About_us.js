import React, { Component } from "react";
import "./About_us.scss";
import { Tariff } from "./Tariff";

export class About_us extends Component {
  render() {
    return (
      <div className="about">
        <h2>Вартість послуг</h2>
        <Tariff/>
      </div>
    );
  }
}
