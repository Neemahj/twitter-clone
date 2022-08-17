import "./Feeds.css";
import { BsStars } from "react-icons/bs";
import { BsImage } from "react-icons/bs";
import { RiFileGifLine } from "react-icons/ri";
import { BiPoll } from "react-icons/bi";
import { BsFillEmojiSmileFill } from "react-icons/bs";
import { TbCalendarTime } from "react-icons/tb";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { BiHeart } from "react-icons/bi";
import { BiMessageRounded } from "react-icons/bi"
import { AiOutlineRetweet } from "react-icons/ai";
import { FiShare } from "react-icons/fi"
import { Tweets } from "./FeedsData";

const Feeds = () => {
  return (
    <div className="feeds-page">
      <header>
        <div className="feeds-title">
          <p>Home</p>
          <BsStars style={{ fontSize: 20 }} />
        </div>
        <div className="feeds-input-ctn">
          <div>
            <div className="feeds-img-ctn">
              <img
                alt="Neemah🌹"
                src="https://pbs.twimg.com/profile_images/1493892914908389377/GnyIwffF_normal.jpg"
              />
            </div>
          </div>
          <div className="img-input-ctn">
            <input type="text" placeholder="What's Happening?" />
            <div className="input-icons">
              <BsImage style={{ color: "rgb(29 161 242)", fontSize: 20 }} />
              <RiFileGifLine
                style={{
                  color: "rgb(29 161 242)",
                  fontSize: 20,
                  marginLeft: 10,
                }}
              />
              <BiPoll
                style={{
                  color: "rgb(29 161 242)",
                  fontSize: 20,
                  marginLeft: 10,
                }}
              />
              <BsFillEmojiSmileFill
                style={{
                  color: "rgb(29 161 242)",
                  fontSize: 20,
                  marginLeft: 10,
                }}
              />
              <TbCalendarTime
                style={{
                  color: "rgb(29 161 242)",
                  fontSize: 20,
                  marginLeft: 10,
                }}
              />
              <HiOutlineLocationMarker
                style={{
                  color: "rgb(29 161 242)",
                  fontSize: 20,
                  marginLeft: 10,
                }}
              />
              <button className="feeds-tweet">Tweet</button>
            </div>
          </div>
        </div>
      </header>

      <div className="mid-tweets-num">
        <p>Show Tweets</p>
      </div>

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

export default Feeds;
