import react from "react";
import "./status.css";

export function Status () {
    return (
        <>
        <div className="Status">
            <h1 >App in progress</h1>
            <h3>steps</h3>
            <ul>
                <li>Routing pages are under src/pages</li>
                <li>components for pages are under src/components</li>
                <li>Routing is implemeted</li>
                <li>Link is used(react-router), and its syle is in index.html (glabl style)</li>
            </ul>

            <ul>api and client
                <li>Created client folder and Moved the react code to client folder</li>
                <li>Created api folder afor backend code</li>
                <li>api: all the node code</li> <li>express installation, mongoosefor db</li>
		        <li>dotenv for hiding sesitive info</li> 
                <li>create index.js file</li> 
		        <li>multer to attach images</li>
                <li>install node js: npm init</li>
                <li>npm start</li>
                <li>npm add modemon : to automatically rerun the script after changes. modify scripts under dependencies, start: nodemon index.js</li>
                <li></li>
            </ul>
        </div>
        </>
    );
}