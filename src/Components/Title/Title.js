import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Title.scss";

export class Title extends Component {
  render() {
    return (
      <div className="title">
        <div className="title__container">
          <div className="title__left">
            <h1 className={"title__left--title"}>
             СТО - Комп`ютерна діагностика
            </h1>
            <h3 className={"title__left--address"}>
              м. Вінниця, вул. Келецька 45
            </h3>
          </div>
          <div className="title__right">


            <div className="title__right--social">
              <div>
              <a
                href="https://t.me/Andrii_Riabukha"
                className="icon icon__telegram"
                target='_blank'
              >
                <FontAwesomeIcon icon="fa-brands fa-telegram" />
              </a>
              </div>
              <div>
              <a
                href="https://instagram.com/andrii_diagnost?igshid=YmMyMTA2M2Y="
                className="icon icon__telegram"
                target='_blank'
              >
                <FontAwesomeIcon icon="fa-brands fa-instagram"  />
              </a>
              </div>
              <div>
              <a
                href="https://www.tiktok.com/@andrii_diagnost?_t=8URRtVPxzGQ"
                className="icon icon__telegram"
                target='_blank'
              >
                <FontAwesomeIcon icon="fa-brands fa-tiktok"  />
              </a>
              </div>
              <div>
              <a
                href="https://www.tiktok.com/@andrii_diagnost?_t=8URRtVPxzGQ"
                className="icon icon__telegram"
                target='_blank'
              >
                <FontAwesomeIcon icon="fa-brands fa-viber"  />
              </a>
              </div>
            </div>
            <h2 className="title__right--name">Андрій Рябуха</h2>
            <a className="title__right--phone" href={'tel:380974138749'}>+380974138749</a>
          </div>
        </div>
      </div>
    );
  }
}
