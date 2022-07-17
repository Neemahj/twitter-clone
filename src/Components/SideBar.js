import { SiTwitter } from "react-icons/si";
import { NavLink } from "react-router-dom";
import { home, explore, notifications, messages, lists, bookmarks, profile, more } from "./icons"

const SideBar = () => {
  return (
    <div className="side-bar">
      <div className="side-bar-ctn">
        <header>
          <SiTwitter
            className="modal-bird"
            style={{ fontSize: 30, color: "white" }}
          />
        </header>

        <nav>
          <NavLink to="/">
            <span>{home} Home </span>
          </NavLink>
          <NavLink to="/explore">
            <span>{explore} Explore </span>
          </NavLink>
          <NavLink to="/notifications">
            <span>{notifications} Notifications</span>
          </NavLink>
          <NavLink to="/messages">
            <span>{messages} Messages</span>
          </NavLink>
          <NavLink to="/bookmarks">
            <span>{bookmarks} Bookmarks </span>
          </NavLink>
          <NavLink to="/lists">
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

        <footer>
          <button>
            <div className="user-img">
              <img
                alt="Neemah🌹"
                src="https://pbs.twimg.com/profile_images/1493892914908389377/GnyIwffF_normal.jpg"
              />
            </div>
            <div>
              <div className="display_name">Neemah🌹</div>
              <div className="username">@neemahj_</div>
            </div>
          </button>
        </footer>
      </div>
    </div>
  );
};

export default SideBar;
