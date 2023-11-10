import React from "react";

const LoginButton = ({ handleLogin }) => {
  return (
    <button className="btn btn-primary py-3 w-100 mb-2" onClick={handleLogin}>
      Login
    </button>
  );
};

export default LoginButton;
