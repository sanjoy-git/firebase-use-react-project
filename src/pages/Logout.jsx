import React from 'react'
import { auth } from '../config/firebaseConfig';

export default function Logout() {


  const handleLogout = (e)=>{
    try {
      e.preventDefault();
      auth.signOut();
      console.log("signout successfully");      
    } catch (error) {
      console.log(error.message);
    }
  }
  
  return (
    <div>
      <button type="button"  onClick={handleLogout}>Logout</button>
    </div>
  )
}
