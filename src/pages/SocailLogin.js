import React, { useContext } from "react";
import { Authcontext } from "../components/Provider/AuthProvider";

const SocailLogin = () => {
  const { gogleloggedin } = useContext(Authcontext);
  return (
    <div>
      <div className="divider">OR</div>
      <div className="text-center">
        <button className="btn btn-circle" onClick={gogleloggedin}>
          G
        </button>
      </div>
    </div>
  );
};

export default SocailLogin;
