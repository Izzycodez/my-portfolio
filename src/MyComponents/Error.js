import React from "react";
import { Link } from "react-router-dom";
const Error = () => {
  const errorStyles ={
    border : '1px solid silver',
    
    width: '60%',
    margin: "auto",
    padding: '15% 30% 15% 30%',
    backgroundColor: "black",
    lineHeight:'75px',

  }
  return (
    <div style={errorStyles}>
      <h1 style={{color:'red', fontSize:'32px'}}>Page Not Found...!!!</h1>
      <h2>You entered an invalid URL. <br />Go back to the <Link to={"/my-react-portfolio"}> Home page</Link>
      </h2>
    </div>
  );
};

export default Error;
