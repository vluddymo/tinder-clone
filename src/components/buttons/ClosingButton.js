import closing_icon from "../../images/icons/closing_icon.png";

const ClosingButton = ({ setShowModal }) => {
  const handleClick = () => {
    setShowModal(false);
  };

  return (
    <button className="closing-button" onClick={handleClick}>
      <img className="icon" alt="cross" src={closing_icon}></img>
    </button>
  );
};

export default ClosingButton;
