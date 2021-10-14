import React, { useState } from 'react'
import { TextInput } from '../../Common/TextInput'
import { BtnPrimary } from '../../Common/Button'
import { useHistory } from 'react-router'
import { Link } from 'react-router-dom'
import Alert from '@material-ui/lab/Alert'
import Axios from 'axios'
import './style.scss'

export const SignIn = () => {
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
  const history = useHistory()

  const handleSignIn = () => {
    console.log(user)
    setLoader(true)
    Axios.get('/accounts/signin', {
      params: user,
    })
      .then(({ data }) => {
        if (data.success) {
          history.push('/order')
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
    <div className="Signin__root">
      <div className="Signin__container">
        <Alert severity={alert.severity}>{alert.message}</Alert>
        <h1 className="Signin__heading">Sign In</h1>

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
        <Link to="/signup">SignUp</Link>
        <BtnPrimary title="Sign In" onClick={handleSignIn} loader={loader} />
      </div>
    </div>
  )
}
