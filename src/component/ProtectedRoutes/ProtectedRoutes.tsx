import { useAuth } from "../context/AuthContext";
import { Navigate } from "react-router-dom";

interface ProtectedRoutesProps {
  children: React.ReactNode;
}

const ProtectedRoute = ({ children }: ProtectedRoutesProps) => {
  const { user } = useAuth();
  if (!user) {
    return <Navigate to="/" />;
  }
  return <>{children}</>;
};

export default ProtectedRoute;
