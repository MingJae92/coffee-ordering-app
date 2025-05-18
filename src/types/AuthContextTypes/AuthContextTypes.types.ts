export interface UserDataTypes {
  id: string;
  name: string;
  email: string;
}

export interface AuthContextDataTypes {
  user: UserDataTypes | null;
  login: (user: UserDataTypes) => void;
  
  logout: () => void;
}
