import react from "react";
import "./post.css";

// export function post() {
//     // 
// }

const post =()=>{
    return(
        <>
        <div className="post">
            <img className="postImage" src="https://static.toiimg.com/img/91227987/Master.jpg" alt=""/>
            <div className="postInfo">
                <div className="postcateg">
                    <span className="postcat">Music</span>
                    <span className="postcat">Life</span> 
                </div>
                <span className="postTitle">Lorem data Title</span>
                <hr />
                <span className="postTime" >1 hr ago</span>
            </div>
            <p className="postdesc">Lorem ipsum dolor sit amet consectetur adipisicing elit. In odit saepe blanditiis, 
                atque sit dolor ipsa corrupti dolore impedit doloribus. 
                Ducimus voluptatibus maxime at explicabo ullam optio ipsa ipsum distinctio.</p>

        </div>
            </>
    )
}

export default post;