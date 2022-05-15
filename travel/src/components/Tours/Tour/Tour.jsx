import React from 'react';
import "./Tour.css";
import {Link} from "react-router-dom";
const Tour = ({data}) =>{
    return(
        <>
        <Link to={`/city/${data.id}`}>
        <div id={data.id}>
        <h3>Place :{data.name}</h3>
        <img src={data.image} alt="" />
        </div>
        </Link>
        
        </>
        
        
    )
};

export default Tour;