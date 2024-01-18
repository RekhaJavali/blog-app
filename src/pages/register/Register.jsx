import React from "react"
import "./register.css"

export function Register() {
    return (
        <>
        <div className="register">
            <span className="registerTitle">Register</span>
            <form className="registerform">
                <label>Username</label>
                <input className="registerInput" type="text" placeholder="Enter your name.."></input>
                
                <label>Email</label>
                <input className="registerInput" type="email" placeholder="Enter your email.."></input>
                
                <label>Password</label>
                <input className="registerInput" type="password" placeholder="Enter your password.."></input>

                <button className="registerbtn" type="submit">Register</button>
            </form>
            <button className="registerLoginbtn" type="submit">Login</button>
        </div>
        </>
    )
}