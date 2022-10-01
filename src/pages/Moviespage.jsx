import React from "react";
import "./Moviespage.css";
import Sidebar from "../components/Sidebar";
import CompactNav from "../components/CompactNav";
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import Movies from "../components/Movies";

const Moviepage = () => {
  return (
    <div className="moviepage">
      <Sidebar />
      <div className="moviepage__movies">
        <div className="moviepage__search">
          <div className="moviepage__search--input">
            <input type="text" placeholder="Search for a movie" />
          </div>
          <div className="moviepage__search--button">
            <button><SearchRoundedIcon /></button>
          </div>
        </div>
        <Movies />
      </div>
    </div>
  );
};

export default Moviepage;
