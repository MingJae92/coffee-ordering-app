import { createContext, ReactNode, useEffect, useState, useContext } from "react";
import {
  CheckoutContextType,
  CheckoutOrders,
  CustomerInfo,
} from "../../types/CoffeeTypes/CoffeeTypes.types";
import { useBasket } from "../CoffeeDashboardContext/CoffeeDashboardContext";

const CheckoutContext = createContext<CheckoutContextType | undefined>(
  undefined
);

export const CheckoutProvider = ({ children }: { children: ReactNode }) => {
  const { selectedCoffee } = useBasket();
  const [orders, setOrders] = useState<CheckoutOrders[]>([]);
  const [customerInfo, setCustomerInfo] = useState<CustomerInfo>({
    name: "",
    email: "",
    phone: "",
  });
  const [pickupTime, setPickupTime] = useState<string>("");
  const [reserved, setReserved] = useState(false);
  const [orderConfirmed, setOrderConfirmed] = useState(false);

  // Sync basket into checkout orders
  useEffect(() => {
    setOrders(selectedCoffee);
  }, [selectedCoffee]);

  const updateCustomerInfo = (info: Partial<CustomerInfo>) => {
    setCustomerInfo((prev) => ({ ...prev, ...info }));
  };

  const reserveOrderFunc = () => {
    if (orders.length === 0) return alert("No coffee reserved");
    if (!pickupTime) return alert("Select a pick up time");
    setReserved(true);
  };

  const confirmOrderFunc = () => {
    if (!reserved) return alert("Please reserve order before confirming order");
    setOrderConfirmed(true);
  };

  return (
    <CheckoutContext.Provider
      value={{
        orders,
        customerInfo,
        pickupTime,
        reserved,
        orderConfirmed,
        updateCustomerInfo,
        setPickupTime,
        reserveOrder: reserveOrderFunc,
        confirmOrder: confirmOrderFunc,
      }}
    >
      {children}
    </CheckoutContext.Provider>
  );
};

// Hook to use CheckoutContext
export const useCheckout = () => {
  const context = useContext(CheckoutContext);
  if (!context) throw new Error("useCheckout must be used within CheckoutProvider");
  return context;
};
