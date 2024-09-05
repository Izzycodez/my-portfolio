import React from "react";
import myPhoto from './myPhoto.jpg'

import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="Home-container">
      <div id="fanpage">
        This is a football fan page. The greatest sport of all time. Football is
        my favourite sport and it's a sport I spent most of my free time
        engaging in. In this mini project I ranked the top 20 active footballers
        . The list does not follow any order and is exclusive to
        Attackers (Rw, Cf, Amf and Lw).
        <Link to={"/football"}> Click here </Link>to see the list. At the end of the list I'm going to pass my verdict on who is the greatest of all time so stay tuned. Also if you feel I omitted any player let me know and give reasons why you feel he deserves to be on the list. Let's talk ⚽ 🥅 
      </div>
      <div className="AboutMe">
        <div className="leftSide">
          <p>
            Hello everyone 🖐, I'm
            <span className="home-myName">
              <i> malachy isreal osung. </i>
            </span>
            Welcome to my portfolio website.
          </p>
          <p>
            I'm a frontend developer, i build dynamic web apps using React.js
          </p>
        </div>
        <div className="image">
          <img src={myPhoto} alt="this is me" className="Home-img" />
          <h2 className="affirm">yes this is me</h2>
        </div>
      </div>
    </div>
  );
};

export default Home;
