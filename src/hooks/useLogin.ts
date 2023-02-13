import {
  getAuth,
  signInWithEmailAndPassword,
  UserCredential,
} from "firebase/auth";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setUser } from "../store/slice/userSlice";
import { updateUserLS } from "../utils/storageUser";

interface IUserLogin {
  user: {
    email: string;
    uid: string;
    accessToken: string;
  };
}

export const useLogin = (
  pass: string,
  email: string
): [string, boolean, () => void] => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const auth = getAuth();

  const login = () => {
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, pass)
      .then(({ user }: UserCredential) => {
        setIsLoading(false);
        setError("");
        dispatch(
          setUser({
            email: user.email,
            id: user.uid,
            token: user.refreshToken,
            name: "unknown",
          })
        );
        updateUserLS({
          email: user.email ? user.email : "",
          id: user.uid,
          token: user.refreshToken,
          name: "unknown",
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
        if (error.message.includes("(auth/wrong-password)")) {
          setError("Неправильный пароль");
          return;
        }
        if (error.message.includes("(auth/user-not-found)")) {
          setError("Пользователь с данным адресом не найден");
          return;
        }
        setError("Неизвестная ошибка");
      });
  };

  return [error, isLoading, login];
};
