import React from "react";
import './App.css'

const Logos = ({logo, title, paragraph}) => {
    return(
        <div className="exemple">
        <img className="pics" src={logo} alt="pictures"/>
        <h1>{title}</h1>
        <p>{paragraph}</p>
        </div>
    )
}

export default Logos