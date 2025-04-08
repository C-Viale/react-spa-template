import { createContext } from "react";

type AuthContextValue = {
  user: unknown;
  loading: boolean;
  login(credentials: { email: string; password: string }): Promise<void>;
  logout: VoidFunction;
};

export const AuthContext = createContext<AuthContextValue>({
  user: {},
  loading: false,
  login: async () => {
    throw new Error('Tried to use method "login" outside an AuthContext');
  },
  logout: () => {
    throw new Error('Tried to use method "logout" outside an AuthContext');
  },
});
