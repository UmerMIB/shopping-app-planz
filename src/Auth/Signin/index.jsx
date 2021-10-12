import React from 'react'
import { TextInput } from '../../Common/TextInput'
import { BtnPrimary } from '../../Common/Button'
import { useHistory } from 'react-router'
import { Link } from 'react-router-dom'
export const SignIn = () => {
  const history = useHistory()

  const handleSignIn = () => {
    history.push('/order')
  }

  return (
    <div>
      <h1>Sign In</h1>

      <TextInput type="email" placeHolder="Email" />

      <TextInput type="password" placeHolder="Password" />
      <Link to="/signup">SignUp</Link>
      <BtnPrimary title="Sign In" onClick={handleSignIn} />
    </div>
  )
}
