import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { useParams } from 'react-router-dom';
import "./TourDetails.css";
export default function TourDetails({ data }) {
    let { id } = useParams();
    function searchAndShow() {
        let tourData=data.filter((val) => { return val.id === id });
        console.log(id)
        return(
            tourData.map((val)=>{
                return(
                    <div id="card">
                        <h3>Tour id : {val.id}</h3>
                        <h3>Tour Name : {val.name}</h3>
                        <h3>Tour Info : {val.info}</h3>
                        <h3>Tour Price: {val.price}$</h3>
                        <img src={val.image} alt="" />

                    </div>
                )
            })
        )

    }

    return (
        <>
            <Header />
            <>{searchAndShow()}</>
            <Footer />

        </>
    )
}