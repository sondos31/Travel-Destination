import React from 'react';
import "./Tours.css";
import Tour from '../Tours/Tour/Tour.jsx';
const Tours = (props) =>{
    return(
        <>
        <div id="content">
        {
            props.tour.map(data => {
                return(
                    <>
                    <Tour data={data}/>
                    </>
                )
                
            })
        }

        </div>
        </>
        
        
    )
};

export default Tours;