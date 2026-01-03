import { UserDataTypes } from "../AuthContextTypes/AuthContextTypes.types";

// Basic coffee info
export interface CoffeeTypes {
  id: number;
  title: string;
  description: string;
  image: string;
  ingredients: string[];
  
}

// Each item in the basket
export interface BasketItem extends CoffeeTypes {
  quantity: number;
  productId:string;
  totalQuantity:number;
}

// API response for all coffees
export interface CoffeeResponse {
  coffee: CoffeeTypes[];
}

// Context for managing basket state
export interface BasketContextType {
  coffeeData: CoffeeTypes[];          // all coffees available
  selectedCoffee: BasketItem[];       // items in basket
  addToBasket: (coffee: CoffeeTypes) => void;
  removeFromBasket: (id: number) => void;
  clearBasket: () => void;
  loading: boolean;
  error: string | null;
  quantity: number;                   // total items in basket
}

// Props for Basket page/component
export interface BasketProps {
  selectedCoffee: BasketItem[];
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

// Checkout-specific types
export interface CheckoutOrders extends BasketItem {
  productId: string;   
}

export interface CustomerInfo {
  displayName: string; 
  id: string;          
  name: string;        
  email: string;       
}

export interface CustomerInfo extends Omit<UserDataTypes, "avatarUrl"> {}



// export interface UserLogin {
//   id:string;
//   email:string;
//   name:string;
//   avatarUrl:string;
// }
// Context for managing checkout state
export interface CheckoutContextType {
  // userLogin: UserLogin | null
  // setUserLogin: (userLogin:UserLogin| null)=>void;
  orders: CheckoutOrders[];
  // customerInfo: CustomerInfo;
  pickupTime: string;                 
  reserved: boolean;
  orderConfirmed: boolean;
  quantity:number;
  totalQuantity:number;
  // updateCustomerInfo: (info: Partial<CustomerInfo>) => void;
  setPickupTime: (time: string) => void;
  reserveOrder: () => void;
  confirmOrder: () => void;
  clearCheckout: ()=>void;
}

export interface Receipts
  extends Pick<
    CheckoutContextType,
    "pickupTime" | "reserved" | "orderConfirmed" | "quantity" | "totalQuantity" | "orders"
  > {
  id: string;        // unique ID for each receipt
  createdAt: string; // timestamp for when the receipt was made
}
