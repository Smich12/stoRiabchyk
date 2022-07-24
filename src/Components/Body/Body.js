import React, { Component } from 'react'
import { ImageBlock } from './ImageBlock'
import './Body.css'

export class Body extends Component {
  render() {
    return (
      <div className='body__container'>
        <div>
          <ImageBlock />
        </div>
       
      </div>
    )
  }
}
