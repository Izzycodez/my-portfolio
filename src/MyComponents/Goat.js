import { React, useState } from "react";
import goat from './Goat.jpg'
const Goat = () => {
    const [close, setClose] = useState(true)
    
     const handleOpen= ()=>{
        const opt= close? 'block': 'none'
        document.getElementById('test').style.display= opt
        setClose(s=>!s)
     }
  return (
    <div className="goat">
      <div>
        Since the history of mankind there has never been a man like this man.
        History will always talk of him.
      </div>
      <div
        id="test"
        className="tease"
        
      >
        His Excellency, The executive president of Nigeria : Bola Ahmed Tinubu.
        <img
          src={goat}
          alt="The greatest of time"
          style={{ maxWidth: "95%" }}
          />
          Nigerians Hail Thee 🤣🤣🤣
      </div>
      <button onClick={handleOpen}
        style={{backgroundColor:'white', color:'gold', height: '40px', width:'120px'}}
      >Click to {close ? "Open" : "Close"}</button>
    </div>
  );
};

export default Goat;
