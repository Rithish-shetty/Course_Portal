import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import './login.css'

const StudentLogin = () => {

    const navigate = useNavigate()

    const [name , setName] = useState('')
    const [reg , setReg] = useState('')

    const Submit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3001/studentLogin' , {name , reg})
        .then(result => {
            console.log("result" , result.data)
            if(result.data === "success"){
                console.log(result , "Login success")
                navigate(`/profile/${reg}`)
            }
            else{
                console.log("mismatch")
            }
        })
        .catch(err => console.log(err))
    }

    return (
        <div className="login-container">
            <div className="login-card">   
            <h2 className="login-title">Admin Login Page</h2>
        <form onSubmit={Submit} className="login-form">

            <div className="form-group">
            <label htmlFor="name">Enter Name</label><br />
                <input type="text" 
                name="name"
                onChange={e => setName(e.target.value)}
                /> <br />
            </div> 

            <div className="form-group">
            <label htmlFor="pass">Enter Reg Number</label><br />
                <input type="text"
                name="pass"
                onChange={e => setReg(e.target.value)}
                /><br />
            </div>
                <button type="submit" className="submit-btn">Submit</button>
        </form>

        <div className="login-links">
        <Link to='/' className="login-link">Home</Link><br />
        </div>
        </div>
        </div>
    )
}

export default StudentLogin;