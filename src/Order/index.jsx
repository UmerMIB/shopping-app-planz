import React, { useState } from 'react'
import { Card } from '../Common/Card'
import './style.scss'

import Modal from '@material-ui/core/Modal'
import { Grid, Paper } from '@material-ui/core'

export const Order = () => {
  const [orderCards, setOrderCards] = useState([{}, {}, {}, {}, {}, {}])
  const [confirmOrder, setConfirmOrder] = useState(false)

  const handleOrder = () => {
    setConfirmOrder(!confirmOrder)
  }

  return (
    <div className="Order__container">
      <Grid className="Order__orders" container>
        {orderCards.map(() => (
          <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
            <Card handleOrder={handleOrder} />
          </Grid>
        ))}
      </Grid>

      <Modal
        open={confirmOrder}
        onClose={handleOrder}
        className="Order__confirm-order"
      >
        <Paper className="Order__confirmation-modal">
          <p>Your order has been confirmed</p>
        </Paper>
      </Modal>
    </div>
  )
}
