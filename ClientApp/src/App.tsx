import React from 'react'
import { Route, Routes } from 'react-router'
// import logo from '../images/logo.svg'
import { Landing } from './Pages/Landing'


// console.log(logo);

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
    <footer>
      <div className="footer">
        <p>Created by <a href="http://www.amheiser.me">Nicholas Amheiser</a></p>
        <p>Github repository: <a href="https://github.com/Amheisern"></a>github image</p>
      </div>
    </footer>
     </div>
}
