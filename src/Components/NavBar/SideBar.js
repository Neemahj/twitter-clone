import { SiTwitter } from "react-icons/si";
import { Link, NavLink } from "react-router-dom";
import { home, explore, notifications, messages, lists, bookmarks, profile, more } from "./icons"
import "./SideBar.css";
import { BiDotsHorizontalRounded } from "react-icons/bi";

const SideBar = () => {
  return (
    <div className="side-bar">
      <div className="side-bar-ctn">
        <header  className="side-bird">
          <SiTwitter
            style={{ fontSize: 30, color: "white" }}
          />
        </header>

        <nav>
          <NavLink to="/">
            <span>{home} Home </span>
          </NavLink>
          <NavLink to="/">
            <span>{explore} Explore </span>
          </NavLink>
          <NavLink to="/">
            <span>{notifications} Notifications</span>
          </NavLink>
          <NavLink to="/">
            <span>{messages} Messages</span>
          </NavLink>
          <NavLink to="/">
            <span>{bookmarks} Bookmarks </span>
          </NavLink>
          <NavLink to="/">
            <span>{lists} Lists </span>
          </NavLink>
          <NavLink to="/profile">
            <span>{profile} Profile</span> 
          </NavLink>
          <button className="more-btn">
            <span>{more} More</span>
          </button>
        </nav>

        <button className="tweet-btn">Tweet</button>

        <footer className="left-pane-footer">
          <div className="account-ctn">
            <div className="user-img">
              <img
                alt="Neemah🌹"
                src="https://pbs.twimg.com/profile_images/1493892914908389377/GnyIwffF_normal.jpg"
              />
            </div>
            <div className="account">
              <div className="display_name">Neemah🌹</div>
              <div className="username">@neemahj_</div>
            </div>
            <div className="dots-icon">
            <BiDotsHorizontalRounded style={{fontSize: 20}}/>
          </div>
          </div>  
        </footer>
      </div>
    </div>
  );
};

export default SideBar;
