import React, { Component } from 'react'
import './Contacts.css'
import logo1 from '../../images/logo1.png'

export class Contacts extends Component {
    render() {
        return (
            <div className='contacts'>
                <h1>Контакти</h1>
                <p>Ви можете зв'язатися з нами за вказаними телефонами або
                    знайти нас за вказаною адресою.
                </p>
                <ul>
                    <li><h4>Автосервіс Riabchuk</h4></li>
                    <li>6CFJ+HQV Вінниця, Вінницька область</li>
                    <li>49.223997, 28.431935</li>
                    <li>Viber, Telegram</li>
                    <li>+380974138749</li>
                </ul>
            </div>
        )
    }
}


