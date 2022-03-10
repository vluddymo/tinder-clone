import appstore from "../images/appstore.png";
import playstore from "../images/playstore.png";

const RegistrationOptions = ({setShowForm}) => {

    const handleEmailLogin = () => {
        setShowForm(true);
      };

    return (
        <div className="auth-content">
        <h2>Create Account</h2>
        <p>
          By clicking Log in, you agree to our Terms. Learn how we process your
          data in our Privacy Policy and our Cookie Policy
        </p>
        <div className="oAuth">
          <button>Login with Google</button>
          <button>Login with Facebook</button>
          <button onClick={handleEmailLogin}>Login with E-Mail</button>
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
    )
}

export default RegistrationOptions