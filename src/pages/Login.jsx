import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  login,
  logout
} from '../reducers/authReducer'

export default function Login () {
  const { authenticated } = useSelector(state => state.auth)
  const dispatch = useDispatch()

  return (
    <div id="Login">
      <h3>Login</h3>
      <p>Authenticated : {authenticated}</p>
      <button onClick={() => dispatch(login())}>Click to Login</button>
      <br/>
      <button onClick={() => dispatch(logout())}>Click to Logout</button>
    </div>
  )
}
