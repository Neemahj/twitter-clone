import "./App.css";
import SignUp from "./Components/SignUpPage/SignUp";
import { useState } from "react";
import SideBar from "./Components/NavBar/SideBar";
import Feeds from "./Components/Feeds/Feeds";
import Widget from "./Components/Widget/Widget";
import Profile from "./Components/Profile/Profile";
import { Routes, Route } from "react-router-dom";

function App() {
 

  return (
    <> 
    <SignUp />
     
     {/* <div className="app">
      <SideBar />
      <Routes>
        <Route path="/" element={<Feeds/>}/> 
        <Route path="/profile" element={<Profile/>}/>
      </Routes>
      <Widget />
    </div> */}

    </>

   
  );
}

export default App;
