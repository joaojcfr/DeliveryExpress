import { useState } from "react";

import './App.css'
import Body from './Components/Body'
import Map from './Components/Map';
import Itemspecs from "./Components/Itemspecs";
import Navbar from "./Components/Navbar";


function App() {
  return (
    <>
   
    <Navbar />
    <div className="card d-flex">
     <Body />

     <Itemspecs />


    </div>
    <Map />

      
    </>
  )
}

export default App;
