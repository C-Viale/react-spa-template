import {
  ReactNode,
  useCallback,
  useEffect,
  useState,
  useTransition,
} from "react";
import { AuthContext } from "./index";

interface AuthContextProviderProps {
  children: ReactNode;
}

type User = {
  name: string;
  email: string;
};

export function AuthContextProvider({ children }: AuthContextProviderProps) {
  const [user, setUser] = useState<Nullable<User>>(null);
  const [loading, startTransition] = useTransition();

  const getUser = useCallback(() => {
    startTransition(async () => {
      //implement

      await new Promise((res) => setTimeout(res, 2000));
      setUser({
        name: "user name",
        email: "user@email.com",
      });
    });
  }, []);

  const login = useCallback(
    async (credentials: { email: string; password: string }) => {
      console.log(credentials);
      // implement
    },
    []
  );

  const logout = useCallback(() => {
    // implement
  }, []);

  useEffect(() => {
    void getUser();
  }, [getUser]);

  return (
    <AuthContext value={{ user, loading, login, logout }}>
      {children}
    </AuthContext>
  );
}
