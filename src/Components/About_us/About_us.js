import React, { Component } from "react";
import "./About_us.scss";

export class About_us extends Component {
  render() {
    return (
      <div className="about">
        <img
          src="/images/logo_orange.png"
          className="about__logo"
          alt={"logo-image"}
        />
        <div className="about__text">
          <h2>Про нас</h2>
          <p>
            Команда досвітчиних майстрів, а головне автолюбителів, надасть вам
            якістний сервіс по ремонту вашого автомобіля. Допоможемо з
            вирішенням ваших проблем. Нас цікавить задоволеність клієнта та
            бажання приїхати до нас знову.
          </p>
        </div>
      </div>
    );
  }
}
