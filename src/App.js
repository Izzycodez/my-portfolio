import Header from "./MyComponents/Header";
import Home from "./MyComponents/Home";
import { Route, Routes,  } from "react-router-dom";
import Football from "./MyComponents/Football"
import Error from "./MyComponents/Error";
import Contact from "./MyComponents/Contact"
import { useState } from "react";
import Footer from "./MyComponents/Footer";
import Goat from "./MyComponents/Goat";


const App = () => {
   const [darkMode, setdarkMode] = useState(true);
   const backgroundStyle = {
     backgroundColor: darkMode ? "black" : "#f3f3f3",
     color: darkMode ? "white" : "black",
   };
   function handleClick() {
     setdarkMode((s) => !s);
   }
   
  return (
    <div style={backgroundStyle}>
      <Header darkMode={darkMode} handleClick={handleClick} />
      <Routes>
        <Route exact path="/my-react-portfolio/" element={<Home />} />
        <Route path="/football" element={<Football />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/football/goat" element={<Goat />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
