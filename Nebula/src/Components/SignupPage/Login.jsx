import React from 'react'
import { useState } from 'react'
import vid1 from "../SignupPage/Assests/car.mp4"
import "../SignupPage/Login.css"
function Login() {
    let [email, setEmail] = useState("");
    let [password, setPassword] = useState("");

    const submitForm = (e) => {
        e.preventDefault();
        console.log(email);
        console.log(password);
    }
    return (
        <div className='Login-Page'>
            <video src={vid1} autoPlay loop muted></video>

            <div className="leftSections">
                <div className="wrapper">
                    <form action="#" onSubmit={submitForm}>
                        <h1>Login</h1>
                        <div className="input-Box">
                            <input type="text" placeholder='Email' required onChange={(e) => { setEmail(e.target.value) }} />
                            <i class='bx bxs-user'></i>
                        </div>
                        <div className="input-Box">
                            <input type="password" placeholder='Password' required onChange={(e) => { setPassword(e.target.value) }} />
                            <i class='bx bxs-lock-alt'></i>
                        </div>
                        <button className="btn">LogIn</button>
                        <div className="register-link">
                            <p>Don't have an account? <a href="./Signup.jsx">Signup</a></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login
