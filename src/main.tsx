import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.tsx";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { AuthProvider } from "./component/context/AuthContext.tsx";
import { CoffeeProvider } from "./component/CoffeeContext/CoffeeContext.tsx";
import { BasketProvider } from "./component/CoffeeDashboardContext/CoffeeDashboardContext.tsx";
import { CheckoutProvider } from "./component/CoffeeCheckOutContext/CheckOutCoffeeContext.tsx";

const clientId = import.meta.env.VITE_GOOGLE_CLIENT_ID;

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <GoogleOAuthProvider clientId={clientId}>
        <AuthProvider>
          <CoffeeProvider>
            <BasketProvider>
              {/* Wrap CheckoutProvider here so it can access selectedCoffee from Basket */}
              <CheckoutProvider>
                <App />
              </CheckoutProvider>
            </BasketProvider>
          </CoffeeProvider>
        </AuthProvider>
      </GoogleOAuthProvider>
    </BrowserRouter>
  </StrictMode>
);
