import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ user, children }) => {
  if (!user) {
    return <Navigate to="/401" replace />;
  }

  return children;
};

export default ProtectedRoute;