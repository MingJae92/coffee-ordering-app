export interface UserDataTypes {
  displayName: string;
  id: string;
  name: string;
  email: string;
  avatarUrl?: string;
}

export interface AuthContextDataTypes {
  user: UserDataTypes | null;
  login: (user: UserDataTypes) => void;

  logout: () => void;
}
