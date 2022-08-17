import "./Profile.css";
import { HiArrowSmLeft, HiOutlineLocationMarker } from "react-icons/hi";
import { RiGlobeLine } from "react-icons/ri";
import { BsCalendar3 } from "react-icons/bs";
import { BiHeart, BiMessageRounded } from "react-icons/bi";
import { AiOutlineRetweet } from "react-icons/ai";
import { FiShare } from "react-icons/fi";
import {Tweets} from "../Feeds/FeedsData";

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

      {/* Profile-info */}
      <div className="profile-mid-section">
        <div className="profile-names">
          <p className="profile-name">Neemah🌹</p>
          <p className="profile-username">@neemahj_</p>
        </div>
        <p>still working on my bio!</p>
        <div className="user-profile-info">
          <div className="user-info">
            <HiOutlineLocationMarker className="profile-info-icon" />
            <p className="profile-info-text">Lagos, Nigeria</p>
          </div>
          <div className="user-info">
            <RiGlobeLine className="profile-info-icon" />
            <p className="profile-info-text">Born September 10</p>
          </div>
          <div className="user-info">
            <BsCalendar3 className="profile-info-icon" />
            <p className="profile-info-text">Joined November 2015</p>
          </div>
        </div>
        <div className="user-followers">
          <div className="profile-ffg">
            <p className="ffg-no">677</p>
            <p className="ffg-text">Following</p>
          </div>
          <div className="profile-ffg">
            <p className="ffg-no">835</p>
            <p className="ffg-text">Followers</p>
          </div>
        </div>
        <div className="profile-lists">
          <p>Tweets</p>
          <p>Tweets and Replies</p>
          <p>Media</p>
          <p>Likes</p>
        </div>
      </div>

      {/* Tweets and Retweets */}
      <div>
      {Tweets.map((tweet) => {
          return (
            <div className="tweet-box">
              <div className="tweet-img-ctn">
                <img
                  alt="Neemah🌹"
                  src="https://pbs.twimg.com/profile_images/1493892914908389377/GnyIwffF_normal.jpg"
                />
              </div>
              <div>
                <div className="tweet-user-ctn">
                  <p className="tweet-name">{tweet.name}</p>
                  <p className="tweet-user">{tweet.username}</p>
                </div>
                <p>{tweet.tweet}</p>
                <div className="lrc-icons">
                <BiMessageRounded style={{fontSize: 22, color: "gray", marginRight: 100}}/>
                <AiOutlineRetweet style={{fontSize: 22, color: "gray",  marginRight: 100}} />
                <BiHeart style={{fontSize: 22, color: "gray",  marginRight: 100 }}/>
                <FiShare style={{fontSize: 22, color: "gray",  marginRight: 100 }}/>
              </div>
              </div>      
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Profile;
