import React, { Component } from 'react'
import { ItemBlock } from './ItemBlock'

export class ImageBlock extends Component {
  render() {
    return (
      <div>
        <div className='service__container'>
            <h1>Послуги</h1>
            <h2>Комп'ютерна діагностика та перевірка систем</h2>
        </div>
        <div className='services'>
            <ItemBlock iconName='gear' title="Комп'ютерна діагностика двигуна" desc="Комп'ютерна діагностика електричних систем бензинових та дизельних двигунів" additionalIconProps={{spin: true}}/>
            <ItemBlock iconName='gears' title="Комп'ютерна діагностика допоміжних систем" desc="Діагностика систем ABS, Airbag, бортової електроніки, систем освітлення та сигналізації"/>
            <ItemBlock iconName='bolt-lightning' title='Система запалювання' desc='Діагностика високовольтних систем, перевірка катушок та свічок запалювання. Перевірка свічок накалювання дизельних двигунів.' />
            <ItemBlock iconName='gas-pump' title='Паливних систем' desc="Діагностика та ремонт паливних систем. Перевірка тиску, регулятора тиску палива, заміна паливного модуля, паливного насоса та фільтрів тонкої та грубої очистки."/>
            <ItemBlock iconName='car' title='Чистка бензинових форсунок' desc='Чистка форсунок на стенді з імітацєю всіх режимі роботи. Перевірка герметичності форсунок під тиском. Демонтаж та монтаж паливних форсунок.'/>
            <ItemBlock iconName='wind' title='Герметичність впускного колектора' desc='Перевірка герметичності впусконого колектора димогогенератора. Чистка дросельних заслонок, замуна прокладок, кілець, вакумних патрубків.'/>
            <ItemBlock iconName='temperature-arrow-down' title='Заправка кондиціонерів' desc='Тестування систем кондиціювання професійним обладнаням. Відкачка та заправка фреону, тест герметичності системи, перевірка тиску.'/>
            <ItemBlock iconName='lightbulb' title='Автоелектрика' desc="Ремонт електропроводки, встановлення ксенона, магнітол, камер заднього виду, парктроніків та доводчиків вікон."/>
        </div>
      </div>
      
    )
  }
}
