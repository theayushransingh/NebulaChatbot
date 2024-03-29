import React, { useState } from 'react'
import "../SignupPage/Signup.css"
import vid1 from "../SignupPage/Assests/car.mp4"
import axios from 'axios'
import toast from 'react-hot-toast'
function Signup() {

    // let [firstname, setFirstname] = useState("");
    // let [lastname, setLastname] = useState("");
    // let [email, setEmail] = useState("");
    // let [password, setPassword] = useState("");
    const [data, setData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: ""
    })
    const submitForm = async (e) => {
        e.preventDefault();
        const { firstName, lastName, email, password } = data;
        try {
            const { data } = await axios.post('./signup', {
                firstName, lastName, email, password
            })
            if (data.error) {
                toast.error(data.error);
            } else {
                setData({
                    firstName: "",
                    lastName: "",
                    email: "",
                    password: ""
                })
                toast.success("Account Created Successfully");
                // navigate('./Login')
            }
        } catch (error) {
            console.log(error.message)
        }

    }
    return (
        <div className='Signup-Page'>
            <video src={vid1} autoPlay loop muted></video>

            <div className="leftSections">
                <div className="wrapper">
                    <form action="#" onSubmit={submitForm}>
                        <h1>Signup</h1>
                        <div className="input-Box">
                            <input type="text" placeholder='First-Name' required onChange={(e) => { setData({ ...data, firstName: e.target.value }) }} value={data.firstName} />
                            <i class='bx bxs-user'></i>
                        </div>
                        <div className="input-Box">
                            <input type="text" placeholder='Last-Name' required onChange={(e) => { setData({ ...data, lastName: e.target.value }) }} value={data.lastName} />
                            <i class='bx bxs-user'></i>
                        </div>
                        <div className="input-Box">
                            <input type="text" placeholder='Email' required onChange={(e) => { setData({ ...data, email: e.target.value }) }} value={data.email} />
                            <i class='bx bxs-envelope'></i>
                        </div>
                        <div className="input-Box">
                            <input type="password" placeholder='Password' required onChange={(e) => { setData({ ...data, password: e.target.value }) }} value={data.password} />
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
