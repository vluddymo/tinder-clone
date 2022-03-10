import { useState } from "react";
import ClosingButton from "./buttons/ClosingButton";
import FlameIconW30 from "./icons/FlameIconW30";
import RegistrationForm from "./RegistrationForm";
import RegistrationOptions from "./RegistrationOptions";

const AuthModal = ({ setShowModal }) => {

  const [showForm, setShowForm] = useState(false);

  return (
    <div className="auth-modal">
      <ClosingButton setShowModal={setShowModal} setShowForm={setShowForm} />
      <FlameIconW30 />
      {!showForm && <RegistrationOptions setShowForm={setShowForm}/>}
      {showForm && <RegistrationForm setShowForm={setShowForm} />}
    </div>
  );
};

export default AuthModal;
