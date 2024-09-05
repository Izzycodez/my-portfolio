import React from "react";
const day = new Date()
const Footer = () => {
  return (
    <div className="footer">
      Copyright &copy; {day.getUTCDate() +
        " / " +
        (day.getMonth()+1) +
        " / " +
        day.getFullYear()}
    </div>
  );
};

export default Footer;
