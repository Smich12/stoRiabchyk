import React, { Component } from 'react'
import './Header.css'
import logo from './../../images/logo.png'

export class Header extends Component {
  render() {
    return (
      <div className='header'>
        <div class="top-nav">
          <div className='logo'>
            <img className='logo__img' src={logo} />
            <h3>Riabchuk</h3>
          </div>
          <input id="menu-toggle" type="checkbox" />
          <label class='menu-button-container' for="menu-toggle">
            <div class='menu-button'></div>
          </label>
          <ul class="menu">
            <li>Головна</li>
            <li>Наші послуги</li>
            <li>Про нас</li>
            <li>Контакти</li>
            <li>Наші кординати</li>
          </ul>
        </div>
      </div>
    )
  }
}


