import "./App.css";
import SignUp from "./Components/SignUp";
import Modal from "react-modal";
import LoginPage from "./Components/LoginPage";
import { useState } from "react";
import Register from "./Components/Register";
import SideBar from "./Components/SideBar";
import Feeds from "./Components/Feeds";
import Widget from "./Components/Widget";
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
    <div className="app">
      {/* <SignUp handleOpenModal = {handleOpenModal}/>
      <Modal className="sign-in-modal"isOpen={openModal}>
        <LoginPage handleCloseModal ={handleCloseModal}/>
        <Register handleCloseModal ={handleCloseModal}/>
      </Modal> */}

      <SideBar />
      <Routes>
        <Route path="/" exact>
          Home
        </Route>
        <Route path="/explore">Explore</Route>
        <Route path="/notifications">Notifications</Route>
        <Route path="/messages">Messages</Route>
        <Route path="/bookmarks">Bookmarks</Route>
        <Route path="/lists">Lists</Route>
        <Route path="/profile">Profile</Route>
      </Routes>

      <div className="feeds">Feeds</div>
      <div className="widget">Widget</div>
    </div>
  );
}

export default App;
