import "./Profile.css";
import { HiArrowSmLeft, HiOutlineLocationMarker } from "react-icons/hi";
import { RiGlobeLine } from "react-icons/ri";
import { BsCalendar3 } from "react-icons/bs";

const Profile = () => {
  return (
    <div className="profile-page">
      <header className="profile-header">
        <HiArrowSmLeft style={{ fontSize: 25 }} />
        <div className="profile-htext">
          <p className="profile-hname">Neemah🌹</p>
          <p className="profile-tweets-no">3,939 Tweets</p>
        </div>
      </header>

      {/* profile images */}
      <div className="profile-images">
        <div className="profile-cover-photo">
          <img
            alt="cover-photo"
            src="https://tse3.explicit.bing.net/th?id=OIP.tjp_pimao0qJDBt4WQKqbAHaEK&pid=Api&P=0"
          />
        </div>
        <div className="profile-dp">
          <img
            alt="Neemah🌹"
            src="https://pbs.twimg.com/profile_images/1493892914908389377/GnyIwffF_normal.jpg"
          />
        </div>
        <button className="profile-edit-button">Edit Profile</button>
      </div>

      <div>
        <p>Neemah🌹</p>
        <p>@neemahj_</p>

        <p>still working on my bio!</p>
      </div>

      <HiOutlineLocationMarker />
      <RiGlobeLine />
      <BsCalendar3 />

    </div>
  );
};

export default Profile;
