const AuthModal = ({setShowModal}) => {

    const handleClick = () => {
        setShowModal(false)
    }

    return (
    <div>
        <div onClick={handleClick}>✖️</div>
    </div>)
  };
  
  export default AuthModal;
  