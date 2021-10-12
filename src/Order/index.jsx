import React, { useState } from 'react'
import { Card } from '../Common/Card'
import './style.scss'

import Modal from '@material-ui/core/Modal'

export const Order = () => {
  const [orderCards, setOrderCards] = useState([{}, {}, {}, {}])
  const [confirmOrder, setConfirmOrder] = useState(false)

  const handleOrder = () => {
    setConfirmOrder(!confirmOrder)
  }

  return (
    <div className="Order__conatiner">
      <div className="Order__orders">
        {orderCards.map(() => (
          <Card handleOrder={handleOrder} />
        ))}
      </div>

      <Modal
        open={true}
        onClose={handleOrder}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        className={'Order__confirm-order'}
      >
        <p>Your order has been confirmed</p>
      </Modal>
    </div>
  )
}
