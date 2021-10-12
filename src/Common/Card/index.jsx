import React from 'react'
import './style.scss'
import pizza from '../../assets/images/pizza.jpeg'
import { BtnPrimary } from '../Button'

export const Card = ({ handleOrder }) => {
  return (
    <div>
      <img src={pizza} />
      <h2> Product Name </h2>
      <p>PKR 172 </p>
      <BtnPrimary title={'Order'} onClick={handleOrder} />
    </div>
  )
}
