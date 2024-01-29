import react from "react";
import "./login.css"


export function Login () {
    return(
        <>
            <div className="login">
                <span className="LoginTitle">Login</span>
                <form className="loginform">
                    <label >Email</label>
                    <input className="loginInput" type="email" id="loginemail" placeholder="Enter your email.."></input>
                    <label>Password</label>
                    <input className="loginInput" type="password" placeholder = "Enter your password.."></input>
                    
                    <button className = "loginbtn" type="submit">Login</button>
                </form>
                <button className = "loginRegisterbtn">Register</button>

            </div>
        </>
    )
}