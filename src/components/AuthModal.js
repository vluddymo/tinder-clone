import icon_color from "../icons/icon_color.png";
import closing_icon from "../icons/closing_icon.png";
import appstore from "../images/appstore.png";
import playstore from "../images/playstore.png";

const AuthModal = ({ setShowModal }) => {
  const handleClick = () => {
    setShowModal(false);
  };

  return (
    <div className="auth-modal">
        <button className="closing-button" onClick={handleClick}>
          <img className="icon" alt="cross" src={closing_icon}></img>
        </button>
      <div className="content">
        <div className="icon-container">
          <img className="icon" src={icon_color} />
        </div>
        <h2>Create Account</h2>
        <p>
          By clicking Log in, you agree to our Terms. Learn how we process your
          data in our Privacy Policy and our Cookie Policy
        </p>
        <div className="oAuth">
          <button>Login with Google</button>
          <button>Login with Facebook</button>
          <button>Login with Phone Number</button>
          <a href="#">Trouble logging in ?</a>
        </div>
        <h2>Get The App</h2>
        <div className="store-links">
          <a className="play-store" href="#">
            <img alt="playstore logo" src={playstore} />
          </a>
          <a className="app-store" href="#">
            <img alt="appstore logo" src={appstore} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default AuthModal;
