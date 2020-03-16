import React, { useState } from "react";
import "./login.scss";

export default function Login() {
  const [details, setDetails] = useState({ email: "", password: "" });

  const handelInput = _incomeing => {
    setDetails({
      ...details,
      [_incomeing.target.name]: _incomeing.target.value
    });
  };

  const handelSubmit = _event => {
    _event.preventDefault();
    console.log(details);
  };

  return (
    <div className="login">
      <div className="login_card "> 
        <div>
          <img
            alt="auth"
            src={require("../../assets/images/undraw_authentication_fsn5.svg")}
          />
        </div>
        <div>
          <img alt="icon" src={require("../../assets/logo/logo_web.png")} style={{ width: 100}}/>
          <form onSubmit={handelSubmit}>
            <input
              name="email"
              className="filds"
              type="text"
              placeholder="email"
              value={details.email}
              onChange={handelInput}
            />
            <input
              name="password"
              className="filds"
              type="password"
              placeholder="password"
              value={details.password}
              onChange={handelInput}
            />
            <input className="submit" type="submit" value={"Login"} />
          </form>
          {/* <span style={{ marginTop: 20 }}>
              Don't have account?<Link to={"/register"}> Signup</Link>
            </span> */}
        </div>
      </div>
    </div>
  );
}
