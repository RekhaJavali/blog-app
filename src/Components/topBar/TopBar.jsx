import React from "react";
import "./topBar.css";

export function TopBar(){
    return(
        <>
        <div className="topheader">
            <div className = "leftTop"> 
            <   i className=" leftTopicon fa-brands fa-square-facebook"></i>
            <   i className=" leftTopicon fa-brands fa-linkedin"></i>
            <   i className=" leftTopicon fa-brands fa-square-x-twitter"></i>
            </div>
            <div className="centerTop">
                <ul className="centerTopList">
                    <li className="centerTopItem">Home</li>
                    <li className="centerTopItem">About</li>
                    <li className="centerTopItem">Contact</li>
                    <li className="centerTopItem">Write</li>
                    <li className="centerTopItem">Logout</li>
                    <li className="centerTopItem">Working Status</li>
                </ul>

            </div>
            <div className="rightTop">
                <img className="rightTopImage"  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSE26NjQaonqTRt7BXD_87Iuukitk_kcGBv3w&usqp=CAU" alt ="not found" />
                {/* <i class="fa-solid fa-user"></i> */}
                <i className=" rightTopSearch fa-solid fa-magnifying-glass"></i>
            </div>
        </div>
        </>
    )
}