import react from "react";
import {Sidebar} from "../../Components/sidebar/Sidebar"
import "./settings.css"

export function Settings () {
    return (
        <>
        <div className="settings"> 
            <div className="settingWrapper">
                <div className="settngTitle">
                    <span className="settingsTitleUpdate">Update your Account</span>
                    <span className="settingsTitleDelete">Delete your Account</span>
                </div>
                <form className="settingForm">
                    <label>Profile Picture</label>
                    <div className="settingPP">
                        <img src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt =""></img>
                        <label for = "inputFile">
                        <i className=" settingsPPIcon fa-regular fa-user"></i>
                        </label>
                        <input className="settingsPPInput" type="file" id="inputFile" style={{display:"none"}}></input>
                    </div>

                    <label>Username</label>
                    <input type="text" placeholder="Rekha" name="name"></input>
                    <label>Email</label>
                    <input type="email" placeholder="Rekha@gmail.com" name="email"></input>
                    <label>Password</label>
                    <input type="password" placeholder="Password" name="password"></input>
                    <button className="settingsubmitbtn" type="submit">Update</button>
                </form>
            </div>
            <Sidebar/>
            </div>
        </>
    )
}