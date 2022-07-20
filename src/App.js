import "./App.css";
import SignUp from "./Components/SignUpPage/SignUp";
import Modal from "react-modal";
import LoginPage from "./Components/SignUpPage/LoginPage";
import { useState } from "react";
import Register from "./Components/SignUpPage/Register";
import SideBar from "./Components/NavBar/SideBar";
import Feeds from "./Components/Feeds/Feeds";
import Widget from "./Components/Widget/Widget";
import Profile from "./Components/Profile/Profile";
import { Routes, Route } from "react-router-dom";

function App() {
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <> 
    {/* <SignUp handleOpenModal = {handleOpenModal}/>
      <Modal className="sign-in-modal"isOpen={openModal}>
        <LoginPage handleCloseModal ={handleCloseModal}/>
        <Register handleCloseModal ={handleCloseModal}/>
      </Modal> */}
     
     <div className="app">
      <SideBar />
      <Routes>
        <Route path="/" element={<Feeds/>}/> 
        <Route path="/profile" element={<Profile/>}/>
      </Routes>
      <Widget />
    </div>

    </>

   
  );
}

export default App;
