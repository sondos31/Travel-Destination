import React from 'react';
import Header from '../Header/Header.jsx';
import Tours from '../Tours/Tours.jsx';
import Footer from '../Footer/Footer.jsx';
import data from '../../data/data.json';
import "./Home.css";

export default function Home() {
  return (
    <>
    <Header />
    <Tours tour={data} />
    <Footer />
   
    </>
  )
}