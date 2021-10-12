import React from 'react'
import { TextInput } from '../../Common/TextInput'
import { BtnPrimary } from '../../Common/Button'
import { useHistory } from 'react-router'

export const SignUp = () => {
  const history = useHistory()

  const handleSignIn = () => {
    history.push('/')
  }
  return (
    <div>
      <h1>Sign Up</h1>

      <TextInput type="email" placeHolder="Email" />

      <TextInput type="password" placeHolder="Password" />
      <BtnPrimary title="Sign Up" onClick={handleSignIn} />
    </div>
  )
}
