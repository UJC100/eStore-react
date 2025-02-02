import React, { useState } from 'react'
import { AuthUser } from '../utils'

const Login = ({setUser, setIsLogged}) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errMsg, setErrMsg] = useState('')
    const handleLogin = (e) => {
       e.preventDefault()
    const getUser = async () => {
        const response = await AuthUser(email, password)
        console.log(response);

        if (response) {
            setUser(response);
            setIsLogged(true)
        }
        else {
            setErrMsg('Invalid Credentials')
        }
        }
        getUser()
   }
  return (
    <form className="login-form" onSubmit={handleLogin}>
      <span className="error-span">{errMsg}</span>
      <label htmlFor="email" className="login-label">
        Email
      </label>
      <input
        type="email"
              placeholder="email"
              value={email}
        name="email"
        className="login-inp"
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <label htmlFor="password" className="login-label">
        Password
      </label>
      <input
        type="password"
        placeholder="Password"
              name="password"
              value={password}
        className="login-inp"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Login