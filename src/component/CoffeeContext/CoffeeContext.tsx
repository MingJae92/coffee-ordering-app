import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import axios from "axios";

import {
  CoffeeContextTypes,
  CoffeeTypes,
} from "../../types/CoffeeTypes/CoffeeTypes.types";

export const CoffeeContext = createContext<CoffeeContextTypes | null>(null);

export const CoffeeProvider = ({ children }: { children: ReactNode }) => {
  const [coffeeData, setCoffeeData] = useState<CoffeeTypes[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);
  const [selected, setSelected]=useState<CoffeeTypes | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      setError(false);
      setLoading(true);
      try {
        const response = await axios.get(
          "https://api.sampleapis.com/coffee/hot"
        );
        setCoffeeData(response.data);
        
      } catch (err) {
        console.error("Error fetching coffee:", err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <CoffeeContext.Provider value={{ loading, error, coffeeData, selected, setSelected }}>
      {children}
    </CoffeeContext.Provider>
  );
};

// Custom hook to use the coffee context
export const useCoffee = () => {
  const context = useContext(CoffeeContext);
  if (!context) {
    throw new Error("useCoffee must be used within a CoffeeProvider");
  }
  return context;
};


