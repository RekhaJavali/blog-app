import react from "react";
import "./single.css"

import {Singlepost } from "../../Components/singlepost/Singlepost"
import { Sidebar } from "../../Components/sidebar/Sidebar";

export function Single() {
    return(
        <>
            <div className="single">
                <Singlepost />
                <Sidebar />
            </div>
        </>
    )
}