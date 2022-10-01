import React from "react";
import MovieBackground from '../assets/moviebackground.jpg'

const Nav = () => {
  return (
    <>
      <section id="landing">
        <div className="movie__background">
          <figure className="movie__background--wrapper">
            <img
              src={MovieBackground}
              alt=""
              className="movie__background--img"
            />
            <div className="movie__background--text">
              <h1 className="movie__background--title">
                Ticket<span className="textcolor">+</span>
              </h1>
              <h3 className="movie__background--para">
                With over 3000 movies on Ticket<span className="textcolor">+</span>,
                the possibilites are endless!
              </h3>
              <div className="movie__background--search">
                <div className="movie__input--wrapper form__submit">
                  <input
                    type="text"
                    className="movie__input"
                    placeholder="Find a movie"
                    onkeyup="searchBarEnter(event)"
                  />
                </div>
              </div>
            </div>
          </figure>
        </div>
      </section>
    </>
  );
};

export default Nav;
