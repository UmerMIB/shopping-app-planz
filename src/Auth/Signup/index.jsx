import React, { useState } from 'react'
import { TextInput } from '../../Common/TextInput'
import { BtnPrimary } from '../../Common/Button'
import { Link } from 'react-router-dom'
import Alert from '@material-ui/lab/Alert'
import Axios from 'axios'

import './style.scss'

export const SignUp = () => {
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
  })
  const [alert, setAlert] = useState({
    severity: '',
    message: '',
  })
  const [loader, setLoader] = useState(false)

  const handleSignUp = () => {
    console.log(user)
    setLoader(true)
    Axios.post('/accounts/signup', user)
      .then(({ data }) => {
        if (data.success) {
          setAlert({
            severity: 'success',
            message: 'Sign up succesfull',
          })
        } else {
          setAlert({ severity: 'error', message: data.message })
        }
      })
      .catch((error) => setAlert({ severity: 'error', message: error.message }))
      .finally(() => setLoader(false))
  }

  const handleChange = (e) => {
    setAlert({
      severity: '',
      message: '',
    })
    setUser({ ...user, [e.target.name]: e.target.value })
  }

  return (
    <div className="Signup__root">
      <div className="Signup__container">
        <Alert severity={alert.severity}>{alert.message}</Alert>
        <h1 className="Signup__heading">Sign Up</h1>

        <TextInput placeHolder="Name" name="name" onChange={handleChange} />
        <TextInput
          type="email"
          placeHolder="Email"
          name="email"
          onChange={handleChange}
        />

        <TextInput
          type="password"
          placeHolder="Password"
          name="password"
          onChange={handleChange}
        />
        <Link to="/">Signin</Link>
        <BtnPrimary title="Sign Up" onClick={handleSignUp} loader={loader} />
      </div>
    </div>
  )
}
