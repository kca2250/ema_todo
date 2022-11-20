import { useNavigate } from "react-router-dom";
import {
  browserLocalPersistence,
  getAuth,
  setPersistence,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { auth, provider } from "../config";

export function useAuth() {
  const navigate = useNavigate();

  const login = () => {
    setPersistence(auth, browserLocalPersistence).then(() => {
      signInWithPopup(auth, provider).then((result) => {
        console.log(result);
        navigate("/");
        return;
      });
    });
  };

  const logout = () => {
    signOut(auth).then(() => {
      navigate("/login");
      return;
    });
  };

  return { login, logout };
}
