import React from "react";
import "./sidebar.css"

export function Sidebar() {
    return(
<>
    <div className="sidebar">
        <div className="sidebarItem">
            <span className="sidebarItemTitle">ABOUT ME</span>
            <img className="sideImage" src = "https://img.freepik.com/free-photo/niagara-falls_649448-3318.jpg?size=626&ext=jpg&ga=GA1.1.1412446893.1705244400&semt=sph"></img>
            <p className="sideText">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi quia aspernatur, </p>
        </div>
        <div className="sidebarItem">
            <span className="sidebarItemTitle">CATEGORIES</span>
            <ul className="sidebarList">
                <li className="sidebarListItem">Life</li>
                <li className="sidebarListItem">Sport</li>
                <li className="sidebarListItem">Tech</li>
                <li className="sidebarListItem">Music</li>
                <li className="sidebarListItem">Style</li>
                <li className="sidebarListItem">Cinema</li>
            </ul>
        </div>
        <div className="sidebarItem">
            <span className="sidebarItemTitle">FOLLOW US</span>
            <div className="sidebarSocial">
                <   i className=" sidebarIcon fa-brands fa-square-facebook"></i>
                <   i className=" sidebarIcon fa-brands fa-linkedin"></i>
                <   i className=" sidebarIcon fa-brands fa-square-x-twitter"></i>
            </div>
        </div>
    </div>
</>
    )
}