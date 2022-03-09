import logo_color from "../images/logo_farbe.png";
import logo_white from "../images/logo.png";

const Nav = ({ minimal, authToken, setShowModal, showModal }) => {
  const handleClick = () => {
    setShowModal(true);
  };

  return (
    <nav>
      <section>
        <div className="logo-container">
          <img
            className="logo"
            alt="logo"
            src={minimal ? logo_color : logo_white}
          />
        </div>
        <ul>
          <li><a href="#">Products</a></li>
          <li><a href="#">Learn</a></li>
          <li><a href="#">Safety</a></li>
          <li><a href="#">Support</a></li>
          <li><a href="#">Download</a></li>
        </ul>
      </section>
      <section>
        {!authToken && (
          <button
            className="nav-button"
            onClick={handleClick}
            disabled={showModal}
          >
            Log in
          </button>
        )}
      </section>
    </nav>
  );
};

export default Nav;
