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
import DashboardMenu from "./component/DashboardMenu/DashboardMenu";
import CustomerHistory from "./component/CustomerHistory/CustomerHistory";
import CustomerSupport from "./component/CustomerSupport/CustomerSupport";
import Checkout from "./pages/Checkout/Checkout";
import DashboardHome from "./pages/DashboardHome/DashboardHomepage";
import Receipts from "./pages/Reciepts/Reciepts";
import CustomerFeedback from "./pages/CustomerFeedback/CustomerFeedback";

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
              <Dashboard/>
            </ProtectedRoute>
          }
        >
          <Route path="Dashboardhome" element={<DashboardHome/>}/>
          <Route path="basket" element={<Basket />} />
          <Route path="menu" element={<DashboardMenu />} />
          <Route path="checkout" element={<Checkout/>}/>
          <Route path="reciepts" element={<Receipts/>}/>
          <Route path="customer-history" element={<CustomerHistory />} />
          <Route path="customer-support" element={<CustomerSupport />} />
          <Route path="customer-feedback" element={<CustomerFeedback/>}/>
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
