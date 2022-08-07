import React, { Component } from "react";
import "./Contacts.scss";

export class Contacts extends Component {
  render() {
    return (
      <div className="contacts">
        <h2>Контакти</h2>
        <p>
          Ви можете зв'язатися з нами за вказаними телефонами або знайти нас за
          вказаною адресою.
        </p>
        <h4>Автосервіс Riabchyk</h4>
        <ul>
          {/*<li>6CFJ+HQV Вінниця, Вінницька область</li>*/}
          {/*<li>49.223997, 28.431935</li>*/}
          <li>Viber, Telegram</li>
          <li>+380974138749</li>
        </ul>
      </div>
    );
  }
}
