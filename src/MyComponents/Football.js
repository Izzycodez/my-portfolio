import React from "react";
import Players from "./Players";
import { useState } from "react";
import Userlist from "./Userlist";
import { Link , Outlet} from "react-router-dom";

const Football = () => {

  const [q, setQ] = useState('')
  const filteredItems = Players.filter(player =>( player.name.toLowerCase().includes(q.toLocaleLowerCase())))
  let num = 1

  return (
    <div className="football">
      <input
        className="search-bar"
        type="search"
        value={q}
        placeholder="Search player's name"
        onChange={(e) => setQ(e.target.value)}
        role="search"
      />

      <div className="player">
        {filteredItems.map((player) => (
          <div key={player.id} className="player-card">
            <div>
              <img
                src={player.image}
                alt={player.name}
                className="players-image"
              />
            </div>
            <p>
              {num++}. name: <i>{player.name}</i> <br />
              country: {player.country}
            </p>
          </div>
        ))}
      </div>
      <div
        style={{
          padding: "20px 10%",
          fontSize:'20px'
        }}
      >
        Now you've gone through the list of the top twenty footballers
        currently, what do you think? Share your thought.
      <br />
       
        So, in my own opinion the greatest of all time is an easy pick. <Link to={"/football/goat"}>Click here</Link> to see
        my pick .
      </div>
      <Userlist />
      <Outlet></Outlet>
    </div>
    // practice  forms and search
  );
};

export default Football;
