import {
  createContext,
  useState,
  ReactNode,
  useContext,
  useEffect,
} from "react";
import axios from "axios";
import {
  CoffeeTypes,
  BasketContextType,
  BasketItem,
  CoffeeResponse,
} from "../../types/CoffeeTypes/CoffeeTypes.types";

// ✅ Context type

const BasketContext = createContext<BasketContextType | undefined>(undefined);

// ✅ Provider
export const BasketProvider = ({ children }: { children: ReactNode }) => {
  const [coffeeData, setCoffeeData] = useState<CoffeeTypes[]>([]);
  const [selectedCoffee, setSelectedCoffee] = useState<BasketItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [quantity, setQuantity] = useState(0);

  useEffect(() => {
    const fetchCoffee = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await axios.get<CoffeeResponse>(
          "http://localhost:7128/api/coffeemenu"
        );
        setCoffeeData(res.data.coffee);
      } catch (err) {
        console.error(err);
        setError("Failed to fetch coffee data");
      } finally {
        setLoading(false);
      }
    };

    fetchCoffee();
  }, []);

  const addToBasket = (coffee: CoffeeTypes) => {
    setSelectedCoffee((prev) => {
      const existing = prev.find((item) => item.id === coffee.id);

      if (existing) {
        return prev.map((item) =>
          item.id === coffee.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...prev, { ...coffee, quantity: 1 }];
    });

    setQuantity((prev) => prev + 1);
  };

  const removeFromBasket = (id: number) => {
    setSelectedCoffee((prev) => {
      const updated = prev
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0);

      // Update total quantity
      const totalQuantity = updated.reduce(
        (sum, item) => sum + item.quantity,
        0
      );
      setQuantity(totalQuantity);

      return updated;
    });
  };

  const clearBasket = () => {
    setSelectedCoffee([]);
    setQuantity(0);
  };

  return (
    <BasketContext.Provider
      value={{
        coffeeData,
        selectedCoffee,
        addToBasket,
        removeFromBasket,
        clearBasket,
        loading,
        error,
        quantity,
      }}
    >
      {children}
    </BasketContext.Provider>
  );
};

export const useBasket = () => {
  const context = useContext(BasketContext);
  if (!context) throw new Error("useBasket must be used within BasketProvider");
  return context;
};
