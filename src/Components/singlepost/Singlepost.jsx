import React from "react";
import "./singlepost.css";

export function Singlepost() {
    return(
        <>
            <div className="singlepost">
                
                <img className="singlepostImage" src="https://static.toiimg.com/img/91227987/Master.jpg" alt=""/>
                <h1 className = "singlepostTitle"> Lorem ipsum dolor sit amet 
                    <div className="singlepostEdit">
                        <i class=" singlepostIcon fa-solid fa-pen-to-square"></i>
                        <i class=" singlepostIcon fa-solid fa-trash"></i>
                    </div>
                </h1>
                <div className="singlepostInfo">
                    <span>Author: <b className = "singlepostAuthor">Rekha </b></span>
                    <span className="singlepostTime"> 1 hr ago</span>
                </div>
                <p className="singlepostdesc">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis odio reprehenderit nesciunt commodi, quibusdam repudiandae eligendi, 
                    maxime iste vero porro consectetur cumque totam tempore alias ipsa cupiditate et quisquam mollitia. Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Aspernatur, cum necessitatibus dicta eum doloribus autem minus molestiae voluptatum aliquam minima odit recusandae et, sit asperiores ducimus inventore sed. Delectus, pariatur.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis odio reprehenderit nesciunt commodi, quibusdam repudiandae eligendi, 
                    maxime iste vero porro consectetur cumque totam tempore alias ipsa cupiditate et quisquam mollitia. Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Aspernatur, cum necessitatibus dicta eum doloribus autem minus molestiae voluptatum aliquam minima odit recusandae et, sit asperiores ducimus inventore sed. Delectus, pariatur.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis odio reprehenderit nesciunt commodi, quibusdam repudiandae eligendi, 
                    maxime iste vero porro consectetur cumque totam tempore alias ipsa cupiditate et quisquam mollitia. Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Aspernatur, cum necessitatibus dicta eum doloribus autem minus molestiae voluptatum aliquam minima odit recusandae et, sit asperiores ducimus inventore sed. Delectus, pariatur.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis odio reprehenderit nesciunt commodi, quibusdam repudiandae eligendi, 
                    maxime iste vero porro consectetur cumque totam tempore alias ipsa cupiditate et quisquam mollitia. Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Aspernatur, cum necessitatibus dicta eum doloribus autem minus molestiae voluptatum aliquam minima odit recusandae et, sit asperiores ducimus inventore sed. Delectus, pariatur.
                </p>
               </div> 
        </>

    )
}