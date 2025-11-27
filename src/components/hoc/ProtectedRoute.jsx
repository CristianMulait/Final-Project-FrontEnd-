import React from "react";
import { Navigate } from "react-router-dom";

/**
 * ProtectedRoute: Wrap routes that require auth.
 * Usage: <ProtectedRoute><YourComponent/></ProtectedRoute>
 * This example checks localStorage token — replace with real auth check.
 */
const ProtectedRoute = ({ children, fallback = "/login" }) => {
  const token = localStorage.getItem("token"); // replace with context/auth provider check
  if (!token) {
    return <Navigate to={fallback} replace />;
  }
  return children;
};

export default ProtectedRoute;
