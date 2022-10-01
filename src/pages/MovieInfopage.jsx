import React from "react";
import Sidebar from "../components/Sidebar.jsx";
import "./MovieInfopage.css";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import Movies from "../components/Movies.jsx";
import Movie from "../components/Movie.jsx";
import Poster1 from '../assets/postertest.jpg'
import Poster2 from '../assets/postertest2.jpg'
import Poster3 from '../assets/postertest3.jpg'
import Poster4 from '../assets/postertest4.jpg'
import Poster5 from '../assets/postertest5.jpg'
import Poster6 from '../assets/postertest6.jpg'

const MovieInfopage = () => {
  return (
    <div className="movieinfopage">
      <Sidebar />
      <div className="container movieinfo__container">
        <div className="row movieinfo__row">
          <div className="movieinfo">
            <figure className="movieinfo__img">
              <img
                src="https://m.media-amazon.com/images/M/MV5BZDEyN2NhMjgtMjdhNi00MmNlLWE5YTgtZGE4MzNjMTRlMGEwXkEyXkFqcGdeQXVyNDUyOTg3Njg@._V1_SX300.jpg"
                alt=""
              />
            </figure>
            <div className="movieinfo__text">
              <h1>Spider-Man</h1>
              <div className="movieinfo__info">
                <p>03 May 2002</p>
                <p><b>.</b></p>
                <p>121m</p>
                <p><b>.</b></p>
                <p>7.4/10</p>
              </div>
              <h3>Overview:</h3>
              <p>
                Based on Marvel Comics' superhero character, this is a story of
                Peter Parker who is a nerdy high-schooler. He was orphaned as a
                child, bullied by jocks, and can't confess his crush for his
                stunning neighborhood girl Mary Jane Watson. To say his life is
                \"miserable\" is an understatement. But one day while on an
                excursion to a laboratory a runaway radioactive spider bites
                him... and his life changes in a way no one could have imagined.
                Peter acquires a muscle-bound physique, clear vision, ability to
                cling to surfaces and crawl over walls, shooting webs from his
                wrist ... but the fun isn't going to last. An eccentric
                millionaire Norman Osborn administers a performance enhancing
                drug on himself and his maniacal alter ego Green Goblin emerges.
                Now Peter Parker has to become Spider-Man and take Green Goblin
                to the task... or else Goblin will kill him. They come face to
                face and the war begins in which only one of them will survive
                at the end.
              </p>
              <button className="movieinfo__button no-cursor"><PlayArrowIcon /> Watch</button>
            </div>
          </div>
          <div className="movieinfo__recommended">
              <h1>Recommended Movies</h1>
              <div className="movieinfo__recommended--list">
              <Movie image={Poster1} text="Guardians of the Galaxy Vol. 2"/>
               <Movie image={Poster2} text="Avengers"/>
               <Movie image={Poster3} text="Spider-Man: Homecoming"/>
               <Movie image={Poster4} text="Minions: Rise of Gru"/>
               <Movie image={Poster5} text='Spider-Man: Into the Spider-Verse'/>
               <Movie image={Poster6} text='Nope'/>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default MovieInfopage;
