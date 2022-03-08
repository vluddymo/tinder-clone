import Nav from "../components/Nav";

const Home = () => {

  const authToken = false;
  const handleClick = () => {
    console.log("clicked");
  };

  return (
    <>
    <Nav minimal={false} authToken={authToken}/>
    <div className="Home">
      <h1>Swipe Right®</h1>
      <button className="primary-button" onClick={handleClick}>
          { authToken ? "Signout" : "Create Account" }</button>
    </div>
    </>
  );
};

export default Home;
