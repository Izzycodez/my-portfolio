import React from "react";
import { useState } from "react";

const Userlist = () => {
  const [usersPlayer, setUsersplayer] = useState(
    {
      playerName: "",
      //playerId: 0, //u'll increment while mapping
      playerCountry: "",
      comment: "",
    },
  );
  let num = 1
    const [userList, setUserList] =useState([])//try making the usersPlayer an array of objects let's see 
   function handleSubmit(e){
    e.preventDefault()
    setUserList( u=> [...u, usersPlayer])
    setUsersplayer({playerCountry:'',playerName:'', comment:''})
  }
  return (
    <div className="viewers-opinion">
      <h3>Which player do think was left out? </h3>
      <form onSubmit={handleSubmit} className="form-data">
        <div className="input-holder">
          <label htmlFor="name">Enter player's name: </label>
          <input
            type="text"
            value={usersPlayer.playerName}
            onChange={(e) =>
              setUsersplayer((u) => ({
                ...u,
                playerName: e.target.value,
              }))
            }
            id="name"
            required
          />
        </div>
        <div className="input-holder">
          <label htmlFor="country">Enter player's country: </label>
          <input
            value={usersPlayer.playerCountry}
            onChange={(e) =>
              setUsersplayer((u) => ({
                ...u,
                playerCountry: e.target.value,
              }))
            }
            type="text"
            id="country"
            required
          />
        </div>
        <div className="input-holder">
          <label htmlFor="comment">Enter player's comment : </label>
          <textarea
            value={usersPlayer.comment}
            onChange={(e) =>
              setUsersplayer((u) => ({
                ...u,
                comment: e.target.value,
              }))
            }
            type="comment"
            id="comment"
            required
          />
        </div>

        <button className="user-btn">Enter</button>
      </form>
      <div>
        {userList.length >= 1 && (
          <div className="userplayers">
            {userList.map((user) => (
              <div key={num} className="userlist">
                {num++}. Player's Name : {user.playerName} <br /> Player's
                Country : {user.playerCountry}{" "}
                <div className="comment"> Your reason :{user.comment}</div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
 
};

export default Userlist;
