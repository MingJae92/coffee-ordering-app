import { Navigate, useNavigate } from "react-router-dom";
import { useAuth } from "../../component/context/AuthContext";

function Dashboard() {
  const { user, logout } = useAuth();
  const navigate = useNavigate()
if (!user) {
    return <Navigate to="/login" replace />;
  }

  const handleLogout = ()=>{
    
    logout()
    navigate("/login")
  }
  return (
    <div>
      <h2>Dashboard</h2>
      <p>Welcome {user.name}</p>
      <p>{user.email}</p>
      <button onClick={handleLogout}>Logout</button>

      {/* <button onClick={handleLogout}>logout</button> */}
    </div>
  );
}

export default Dashboard;
