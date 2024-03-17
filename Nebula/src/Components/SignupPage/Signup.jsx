import React, { useState } from 'react'
import "../SignupPage/Signup.css"
import vid1 from "../SignupPage/Assests/car.mp4"
function Signup() {

    let [username, setUsername] = useState("");
    let [email, setEmail] = useState("");
    let [password, setPassword] = useState("");

    const submitForm = (e) => {
        e.preventDefault();
        console.log(username);
        console.log(email);
        console.log(password);
    }
    return (
        <div className='Signup-Page'>
            <video src={vid1} autoPlay loop muted></video>

            <div className="leftSections">
                <div className="wrapper">
                    <form action="#" onSubmit={submitForm}>
                        <h1>Signup</h1>
                        <div className="input-Box">
                            <input type="text" placeholder='Username' required onChange={(e) => { setUsername(e.target.value) }} />
                            <i class='bx bxs-user'></i>
                        </div>
                        <div className="input-Box">
                            <input type="text" placeholder='Email' required onChange={(e) => { setEmail(e.target.value) }} />
                            <i class='bx bxs-envelope'></i>
                        </div>
                        <div className="input-Box">
                            <input type="password" placeholder='Password' required onChange={(e) => { setPassword(e.target.value) }} />
                            <i class='bx bxs-lock-alt'></i>
                        </div>
                        <button className="btn">Create Account</button>
                        <div className="register-link">
                            <p>Already have an account? <a href="./Login.jsx">Login</a></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Signup
