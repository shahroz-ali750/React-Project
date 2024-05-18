import React from 'react'
import './breadcrum.css'
import arrow_icon from '../Assets/breadcrum_arrow.png'
export default function Breadcrum(props) {
    const {product} = props

  return (
    <div className='breadcrum'>
        Home <img src={arrow_icon} alt="" /> SHOP <img src={arrow_icon} alt="" /> {product.category} <img src={arrow_icon} alt="" /> {product.name}
    </div>
  )
}
