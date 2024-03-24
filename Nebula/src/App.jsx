import React from 'react'
import NavBar from './Components/Header/NavBar'
import Home from './Components/home/Home'
import About from './Components/About/About'
import Contact from './Components/Contact/Contact'
import Signup from './Components/SignupPage/Signup'
import Login from './Components/SignupPage/Login'
import Chatpage from './Components/Chatpage/Chatpage'
import axios from 'axios';
import { Toaster } from 'react-hot-toast'
import { UserContextProvider } from './Context/userContext'

axios.defaults.baseURL = 'http://localhost:8000';
axios.defaults.withCredentials = true;
const App = () => {
  return (
    <div style={{ height: "100%" }}>
      <Toaster position='bottom-right' toastOptions={{ duration: 2000 }} />
      <UserContextProvider>
        {/* <NavBar /> */}
        {/* <Home /> */}
        {/* <About /> */}
        {/* <Contact /> */}
        {/* <Signup /> */}
        {/* <Login /> */}
        <Chatpage />
      </UserContextProvider>

    </div>
  )
}

export default App
