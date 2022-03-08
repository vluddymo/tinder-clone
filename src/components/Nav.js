import logo_color from "../images/logo_farbe.png";
import logo_white from "../images/logo.png";

const Nav = ({ minimal, authToken }) => {
  return (
    <nav>
      <div className="logo-container">
        <img className="logo" alt="logo" src={minimal ? logo_color : logo_white} />
      </div>
      {!authToken && <button className="nav-button">Log in</button>}
    </nav>
  );
};

export default Nav;
