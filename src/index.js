import React from "react";
import ReactDOM from "react-dom"
import Nav from "./Components/Nav";
import Home from "./Components/Home";
import Cards from "./Components/Cards";
import data from "./Db.js";
import Footer from "./Components/Footer.jsx";
import Footer2 from "./Components/Footer2.jsx";
import BottomNav from "./Components/BottomNav.jsx";


let root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
 <>
   <Nav/>
   <Home/>
   <div id="cards-container">

    {data.map(x=>{
        return(
           <Cards imgSrc = {x.imgSrc} alt = {x.alt} bHead = {x.bHead} bDesc = {x.bDesc} btn = {x.btn}/>
        )
    })}
    </div>
    <Footer/>
    <Footer2/>
    <BottomNav/>
 </>
)
