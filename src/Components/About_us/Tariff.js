import React, { Component } from "react";
import { Tariff_comp } from "./Tariff_comp";

export class Tariff extends Component {
  render() {
    return (
      <div >
        
        <div>
          <Tariff_comp
            service="Комп'ютерна діагностика"
            cost="від 350 грн"/>
          <Tariff_comp
            service="Промивка форсунок"
            cost="від 400 грн"/>            
          <Tariff_comp
            service="Перевірка системи запалювання"
            cost="від 200 грн"/>
          <Tariff_comp
            service="Перевірка тиску палива"
            cost="від 200 грн" />
          <Tariff_comp
            service="Перевірка димогенератором"
            cost="від 200 грн" />
            <Tariff_comp
            service="Чистка та адаптація дроселля"
            cost="від 300 грн" />   
            <Tariff_comp
            service="Заправка кондиціонера"
            cost="від 400 грн" />
            <Tariff_comp
            service="Послуги автоелектрика"
            cost="від 300 грн" />              
        </div>
      </div>
    );
  }
}
