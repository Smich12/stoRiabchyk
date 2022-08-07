import React, { Component } from "react";
import "./Header.scss";

export class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="top-nav">
          <div className="logo">
            <img className="logo__img" src={require('/assets/images/logo_white.png')} />
            <h3>Riabchyk</h3>
          </div>
          <input id="menu-toggle" type="checkbox" />
          <label className="menu-button-container" htmlFor="menu-toggle">
            <div className="menu-button"></div>
          </label>
          <ul className="menu">
            <li>Головна</li>
            <li>Наші послуги</li>
            <li>Вартість</li>
            <li>Наші кординати</li>
            <li>Контакти</li>
          </ul>
        </div>
      </div>
    );
  }
}
