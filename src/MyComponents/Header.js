
import './header.css'
import { Link, Outlet} from "react-router-dom";

const Header = ({darkMode,handleClick}) => {
   
  return (
    <>
      <header id="App-header">
        <h1>IZZYCODEZ</h1>
        <nav id="App-nav">
          <ul className="nav-list">
            <Link to={"/my-react-portfolio/"} className="link">
              <li>HOME</li>
            </Link>
            <Link to={"/football"} className="link">
              <li>FOOTBALL</li>
            </Link>
            <Link to={"/contact"} className="link">
              <li>CONTACT-ME</li>
            </Link>
          </ul>
          <button
            className="nav-toggle"
            onClick={handleClick}
            style={{
              backgroundColor: darkMode ? "white" : "black",
              color: darkMode ? "black" : "white",
            }}
          >
            {darkMode ? "Light Mode" : "Dark Mode"}
          </button>
        </nav>
      </header>
      <Outlet></Outlet>
    </>
  );
};

export default Header;
