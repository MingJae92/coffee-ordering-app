// Basic coffee info
export interface CoffeeTypes {
  id: number;
  title: string;
  description: string;
  image: string;
  ingredients: string[];
}

// Each item in the basket
// Option 1 (recommended): extend CoffeeTypes with quantity
export interface BasketItem extends CoffeeTypes {
 
  quantity: number;
}

export interface CoffeeResponse {
  coffee:CoffeeTypes[]
}

// Context for managing basket state
export interface BasketContextType {
  coffeeData: CoffeeTypes[]; // all coffees available
  selectedCoffee: BasketItem[]; // basket items
  addToBasket: (coffee: CoffeeTypes) => void;
  removeFromBasket: (id: number) => void;
  clearBasket: () => void;
  loading: boolean;
  error: string | null;
  quantity: number;
}

// Props for Basket page/component
export interface BasketProps {
  selectedCoffee: BasketItem[]; // basket items
}

// Context for managing all coffees (optional)
export interface CoffeeContextTypes {
  coffeeData: CoffeeTypes[];
  loading: boolean;
  error: boolean;
  selected: CoffeeTypes | null;
  setSelected: (coffee: CoffeeTypes | null) => void;
}

// Props for Coffee modal
export interface CoffeeModalProps {
  coffee: CoffeeTypes | null;
  open: boolean;
  onClose: () => void;
}
