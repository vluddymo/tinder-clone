import { useState } from "react";
import Nav from "../components/Nav";
import AuthModal from "../components/AuthModal";

const Home = () => {
  const [showModal, setShowModal] = useState(false);

  const authToken = false;

  const handleClick = () => {
    if (!authToken) {
      console.log("clicked");
      setShowModal(true);
    }
    console.log("log out");
  };

  return (
    <div className="overlay">
      <Nav
        minimal={false}
        authToken={authToken}
        setShowModal={setShowModal}
        showModal={showModal}
      />
      {showModal && <AuthModal setShowModal={setShowModal} />}
      <div className="home-banner">
        <h1>
          Swipe Right<span>™</span>
        </h1>
        <button onClick={handleClick}>
          {authToken ? "Signout" : "Create Account"}
        </button>
      </div>
    </div>
  );
};

export default Home;
