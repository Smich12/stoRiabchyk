import React, { Component } from 'react'
import './About_us.css'
import logo1 from '../../images/logo1.png'

export class About_us extends Component {
    render() {
        return (
            <div className='about'>
                <img src={logo1} className="about__logo" />
                <div className='about__text'>
                    <h2>Про нас</h2>
                    <p>Команда досвітчиних майстрів, а головне автолюбителів,
                        надасть вам якістний сервіс по ремонту вашого автомобіля.
                        Допоможемо з вирішенням ваших проблем.
                        Нас цікавить задоволеність клієнта та бажання приїхати до нас знову.</p>
                </div>
            </div>
        )
    }
}


