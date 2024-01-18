import React from "react";

import "./topBar.css";
import {Link} from "react-router-dom";

export function TopBar(){
    const user = false;
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
                    <li className="centerTopItem"><Link className = "link" to="/">Home</Link></li> 
                    {/* link styel is specified in index.html */}
                    <li className="centerTopItem"><Link className="link" to="/">About</Link></li>
                    <li className="centerTopItem"><Link className="link" to="/">Contact</Link></li>
                    <li className="centerTopItem"><Link className = "link" to="/write">Write</Link></li>
                    { user && <li className="centerTopItem">Logout</li> }
                    <li className="centerTopItem"><Link className="link" to ="/status">Status</Link></li>
                </ul>

            </div>
            <div className="rightTop">
                {user 
                ? (<Link to="/settings" >
                    <img className="rightTopImage"  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSE26NjQaonqTRt7BXD_87Iuukitk_kcGBv3w&usqp=CAU" alt ="not found" />
                    </Link>)
                : ( 
                    <ul className="centerTopList">
                        <li  className="centerTopItem">
                            <Link className="link" to="/login">LOGIN</Link>
                        </li>
                        <li  className="centerTopItem">
                            <Link className="link" to="/register">REGISTER</Link>
                        </li>
                    </ul>
                )
                }
                    <i className=" rightTopSearch fa-solid fa-magnifying-glass"></i>
                
            </div>
        </div>
        </>
    )
}