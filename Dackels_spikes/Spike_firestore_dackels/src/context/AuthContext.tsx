import { ReactNode, createContext, useEffect, useState } from "react";
import { UserType } from "../types/customTypes";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "../config/firebaseConfig";
type AuthContextProviderProps = {
  children: ReactNode;
};

type AuthContextType = {
  user: UserType | null;
  setUser: (a: UserType | null) => void;
  register: (email: string, password: string) => Promise<void>;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
};

//2. Define context initial value

const AuthContextInitialValue = {
  user: {} as UserType,
  setUser: () => {
    throw new Error("Context not initialized");
  },
  register: () => Promise.resolve(),
  login: () => Promise.resolve(),
  logout: () => {
    throw new Error("Context not initialized");
  },
};
//1. Create context
export const AuthContext = createContext<AuthContextType>(
  AuthContextInitialValue
);

//4. Define the provider of our context (the store)

export const AuthContextProvider = ({ children }: AuthContextProviderProps) => {
  // console.log("%c AuthContext rerendered", "color:orange");
  console.log("auth", auth);

  const [user, setUser] = useState<UserType | null>(null);

  const register = async (email: string, password: string) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      console.log("user", user);
    } catch (err) {
      //if you want to have a property "code" in the error, create a custom type for "err"
      // const errorCode = err.code
      const errorMessage = (err as Error).message;
      console.log("errorMessage", errorMessage);
    }
  };

  const login = (email: string, password: string) => {
    return signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const userObject = userCredential.user;
        console.log("user loggedIn succesfully::", userObject);
        const email = userCredential.user.email;
        const uid = userCredential.user.uid;
        // ...

        if (email && uid) {
          setUser({ email, uid });
        } else {
          throw new Error("Email non existent");
        }
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("error", error);
      });
  };

  const checkUserStatus = () => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const uid = user.uid;
        // console.log('user', user)
        console.log("%c user loggedin", "color:green", user);
        if (user.email) {
          setUser({ email: user.email, uid: user.uid });
        }
      } else {
        // User is signed out
        // ...
        console.log("%c user signed out", "color:red");
      }
    });
  };

  const logout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        console.log("%c user logged out succesfully::", "color:green");
        setUser(null);
      })
      .catch((error) => {
        // An error happened.
        console.log("%c user cannot log out ::", "color:red");
      });
  };
  useEffect(() => {
    checkUserStatus();
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser, register, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
