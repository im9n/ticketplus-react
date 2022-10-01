import React from 'react';
import Movie from './Movie';
import Poster1 from '../assets/postertest.jpg'
import Poster2 from '../assets/postertest2.jpg'
import Poster3 from '../assets/postertest3.jpg'
import Poster4 from '../assets/postertest4.jpg'
import Poster5 from '../assets/postertest5.jpg'
import Poster6 from '../assets/postertest6.jpg'


const Movies = () => {
    return (
        <section id="movies">
        <div className="container movie__container">
         <div className="row movie__row">
           <div className="movies__content">
             <div className="movies__list" >
               <i className="fa-solid fa-spinner movies__list--loading"></i>
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
       </section>
    );
}

export default Movies;
