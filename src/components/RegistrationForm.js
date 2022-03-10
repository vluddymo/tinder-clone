import { useState } from "react";

const RegistrationForm = () => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState(null);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submit");
    if (password == confirmPassword) {
      return {
        email: { email },
        password: { password },
      };
    } else {
        setError("Your passwords ain't matching")
    }
  };

  return (
    <div className="auth-content">
      <h2>Let's get you started</h2>
      <form onSubmit={handleSubmit}>
        <label>email</label>
        <br />
        <input
          type={"email"}
          id={"email"}
          name={"email"}
          placeholder={"email"}
          required={true}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        ></input>
        <br />
        <label>password</label>
        <br />
        <input
          type={"password"}
          id={"password"}
          name={"password"}
          placeholder={"password"}
          required={true}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        ></input>
        <br />
        <label>confirm password</label>
        <br />
        <input
          type={"password"}
          id={"password-check"}
          name={"password-check"}
          placeholder={"confirm password"}
          required={true}
          onChange={(e) => {
            setConfirmPassword(e.target.value);
          }}
        ></input>
        <hr />
        <p>{error}</p>
        <input className="secondary-button" type={"submit"}></input>
      </form>
    </div>
  );
};

export default RegistrationForm;
