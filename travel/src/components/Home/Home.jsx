import React from 'react';
import Header from '../Header/Header';
import Tours from '../Tours/Tours';
import Footer from '../Footer/Footer';
import "./Home.css";

export default function Home({data}) {
  return (
    <>
    <Header />
    <Tours tour={data} />
    <Footer />
   
    </>
  )
}