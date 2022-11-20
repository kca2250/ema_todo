import { useNavigate } from "react-router-dom";
import {
  browserLocalPersistence,
  getAuth,
  setPersistence,
  signInWithPopup,
} from "firebase/auth";
import { provider } from "../config";

export function useAuth() {
  const navigate = useNavigate();

  const login = async () => {
    const auth = getAuth();
    await setPersistence(auth, browserLocalPersistence).then(() => {
      signInWithPopup(auth, provider).then((result) => {
        console.log(result);
        navigate("/");
        return;
      });
    });
  };

  return { login };
}
