import {
  createUserWithEmailAndPassword,
  getAuth,
  UserCredential,
} from "firebase/auth";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setUser } from "../store/slice/userSlice";
import { updateUserLS } from "../utils/storageUser";

export const useSignUp = (
  name: string,
  email: string,
  pass: string,
  passCheck: string
): [string, boolean, () => void] => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const auth = getAuth();

  const signUp = () => {
    if (name.length <= 3) {
      setError("Имя пользователя должно содержать больше 3-х букв");
      return;
    }
    if (pass !== passCheck) {
      setError("Пароли не совпадают");
      return;
    }
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, pass)
      .then(({ user }: UserCredential) => {
        setIsLoading(false);
        setError("");
        dispatch(
          setUser({
            email: user.email,
            id: user.uid,
            token: user.refreshToken,
            name: name,
          })
        );
        updateUserLS({
          email: user.email ? user.email : "",
          id: user.uid,
          token: user.refreshToken,
          name: name,
        });
        navigate("/menu");
      })
      .catch((error) => {
        setIsLoading(false);
        if (error.message.includes("(auth/invalid-email)")) {
          setError("Некорректный адрес электронной почты");
          return;
        }
        if (error.message.includes("(auth/internal-error)")) {
          setError("Вы не ввели пароль");
          return;
        }
        if (error.message.includes("(auth/weak-password)")) {
          setError("Пароль должен содержать больше 5 символов");
          return;
        }
        setError("Неизвестная ошибка");
      });
  };

  return [error, isLoading, signUp];
};
