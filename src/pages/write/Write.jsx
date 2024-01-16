import react from "react";
import "./write.css"

export function Write() {

return (
    <>
     <div className = "write">
        <img className= "writeImage" src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt =""/>
         <form className="writeForm">
            <div className = "writeFormInput">
                < label for="formfile"><i className=" writeFileIcon fa-solid fa-plus"></i></label> 
                <input type="file"  id ="formfile"  style = {{display:"none"}}/>
                <input type= "text"  className="writeInput" placeholder="Title" autoFocus = {true}></input>
            </div>
            <div className = "writeFormInput">
                <textarea className= "writeInput writeText" placeholder="Tell your Story..." ></textarea>
            </div>
            <button className="writebutton" type = "submit" autoFocus = {true}>Publish</button>
         </form>

     </div>
    </>
)
}