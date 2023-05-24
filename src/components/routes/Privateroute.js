import React, { useContext } from "react";
import { Authcontext } from "../Provider/AuthProvider";
import { Navigate } from "react-router-dom";

const Privateroute = ({ children }) => {
  const { user, loading } = useContext(Authcontext);

  if (loading) {
    return <div>loading........</div>;
  }

  if (user.email) {
    return children;
  }

  return <Navigate to="/login" replace></Navigate>;
};

export default Privateroute;
