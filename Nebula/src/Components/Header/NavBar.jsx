import React from 'react'
import "../Header/NavBar.css"
import Logo4 from "../Header/assets/Logo4.png"
const NavBar = () => {
    return (
        <div className='NavBar'>
            <div className='Logo'>
                <img src={Logo4} alt="" />
            </div>
            <div className='rightSection'>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </div>
            <div className='Navbuttons'>
                <button id='btn2'>Log in</button>
                <button id='btn1'>Sign up</button>
            </div>
        </div>
    )
}

export default NavBar
