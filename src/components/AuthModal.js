const AuthModal = ({ setShowModal }) => {
  const handleClick = () => {
    setShowModal(false);
  };

  return (
    <div className="auth-modal">
      <div className="closer" onClick={handleClick}>
        ✖️
      </div>
      <div className="content">
        <h2>Create Account</h2>
        <p>
          By clicking Log in, you agree to our Terms. Learn how we process your
          data in our Privacy Policy and our Cookie Policy
        </p>
        <div className="oAuth">
        <button>Login with Google</button>
        <button>Login with Facebook</button>
        <button>Login with Phone Number</button>
          <a>Trouble logging in ?</a>
        </div>
        <h2>Get The App</h2>
        <div className="store-links">
          <button>App Store</button>
          <button>Google Play</button>
        </div>
      </div>
    </div>
  );
};

export default AuthModal;
