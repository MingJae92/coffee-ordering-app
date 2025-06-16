export interface CoffeeTypes {
  id: number;
  title: string;
  description: string;
  image: string;
  ingredients: string[];
}

export interface CoffeeContextTypes {
  coffeeData: CoffeeTypes[];
  loading: boolean;
  error: boolean;
  selected: CoffeeTypes | null;
  setSelected: (coffee: CoffeeTypes | null) => void;
}

export interface CoffeeModalProps {
  coffee: CoffeeTypes | null;
  open: boolean;
  onClose: ()=>void
}
