import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/homepage/Homepage";
import Menu from "./pages/menu/Menu";
import Aboutpage from "./pages/Aboutpage/Aboutpage";
import Login from "./pages/login/Login";
import Dashboard from "./pages/dashboard/Dashboard";
import ProtectedRoute from "./component/ProtectedRoutes/ProtectedRoutes";
import { AuthProvider } from "./component/context/AuthContext";
import NotFound from "./pages/NotFound/NotFound";
import Basket from "./pages/Basket/Basket";

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/about" element={<Aboutpage />} />
        <Route path="/login" element={<Login />} />

        {/* Protected Dashboard */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        >
          <Route path="basket" element={<Basket />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
