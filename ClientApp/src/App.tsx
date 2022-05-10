import React from 'react'
import { Route, Routes } from 'react-router'
import logo from '../images/logo.png'
import { Landing } from './Pages/Landing'


console.log(logo);

export function App() {
  return <div>
    <header>
      <img src={logo} className="logo" alt="logo" />
      <h1>BikeMi</h1>
      <div className="SignIn">Sign In</div>
    </header>
    <Routes>
      <Route path="/" element={<Landing />} />
    </Routes>
    
     </div>
}
