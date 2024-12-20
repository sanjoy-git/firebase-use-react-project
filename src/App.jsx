import React from 'react'
import Register from './pages/register'
import Login from './pages/Login'
import Logout from './pages/Logout'

export default function App() {
  return (
    <div style={{textAlign:'center'}}>
      <Register/>
      <br /><br />
      <Login/>
      <br /><br />
      <Logout/>
    </div>
  )
}
