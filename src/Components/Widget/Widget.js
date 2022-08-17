import "./Widget.css";
import { FiSearch } from "react-icons/fi";
import { Trends } from "./Data";

const Widget = () => {
  return (
    <div className="right-pane">
      <div>
        <header className="trend-search-container">
          <FiSearch className="trend-search-icon" style={{ fontSize: 20 }} />
          <input type="text" name="search" placeholder="Search Twitter" />
        </header>

        <div className="widget-body">
          <h1 className="title">Trends for you</h1>
          {Trends.map((trend) => {
            return (
              <div className="trend-ctn"> 
                <div className="trend-box">
                  <p className="trend-title">{trend.title}</p>
                  <p className="trend-topic">{trend.topic}</p>
                  <p className="trend-title">{trend.num_of_tweets}</p>
                </div>
                <div className="trend-dots">{trend.icon}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Widget;
