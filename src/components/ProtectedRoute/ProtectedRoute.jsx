import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const user = localStorage.getItem("user"); // ✅ Local storage se user check karein

  return user ? children : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
