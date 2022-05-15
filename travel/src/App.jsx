import React from 'react';
import Home from './components/Home/Home';
import { Routes, Route } from "react-router-dom";
import data from './data/data.json';
import "./App.css";
import TourDetails from "./components/TourDetails/TourDetails.jsx";

export default function App() {
  return (
    <>
    <Routes>
    <Route path="/" element={<Home data={data}/>} />
    <Route path="/city/:id" element={<TourDetails data={data}/>} />
    </Routes>
    </>
  )
}