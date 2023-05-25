import React, { useContext } from "react";
import { Authcontext } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const Privateroute = ({ children }) => {
  const { user, loading } = useContext(Authcontext);
  let location = useLocation();
  if (loading) {
    return <div>loading........</div>;
  }

  if (user?.email) {
    return children;
  }

  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default Privateroute;
