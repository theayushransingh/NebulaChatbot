import React from 'react'
import NavBar from './Components/Header/NavBar'
import Home from './Components/home/Home'
import About from './Components/About/About'
import Contact from './Components/Contact/Contact'
import Signup from './Components/SignupPage/Signup'
import Login from './Components/SignupPage/Login'
const App = () => {
  return (
    <div style={{ height: "100%" }}>
      {/* <NavBar /> */}
      {/* <Home /> */}
      {/* <About /> */}
      {/* <Contact /> */}
      <Signup />
      {/* <Login /> */}
    </div>
  )
}

export default App
