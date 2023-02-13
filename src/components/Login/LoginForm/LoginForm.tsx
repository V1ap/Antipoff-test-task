import React, { useState } from "react";
import styles from "./loginform.module.css";
import { Passeye } from "../../Icons/Passeye";
import { useLogin } from "../../../hooks/useLogin";

export function LoginForm() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [passType, setPassType] = useState("password");
  const [error, isLoading, login] = useLogin(pass, email);

  const handleLogin = (e: React.SyntheticEvent) => {
    e.preventDefault();
    login();
  };

  return (
    <form action="" className={styles.loginForm}>
      <div className={styles.loginInputContainer}>
        <label className={styles.loginLabel} htmlFor="email">
          Электронная почта
        </label>
        <input
          className={styles.loginInput}
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="email"
          name="email"
          aria-invalid={error.includes("адрес") ? "true" : undefined}
        />
        {error.includes("адрес") && (
          <div className={styles.loginError}>{error}</div>
        )}
      </div>
      <div className={styles.loginInputContainer}>
        <label className={styles.loginLabel} htmlFor="password">
          Пароль
        </label>
        <input
          className={styles.loginInput}
          type={passType}
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          placeholder="password"
          name="password"
          aria-invalid={
            error.toLocaleLowerCase().includes("пароль") ? "true" : undefined
          }
        />
        {error.toLocaleLowerCase().includes("пароль") && (
          <div className={styles.loginError}>{error}</div>
        )}
        <button
          type="button"
          className={styles.passBtn}
          onClick={() => {
            setPassType(passType === "password" ? "text" : "password");
          }}
        >
          <Passeye />
        </button>
      </div>
      <button
        type="submit"
        className={styles.loginBtn}
        onClick={handleLogin}
        disabled={isLoading ? true : false}
      >
        Войти
      </button>
      {error.includes("Неизвестная") && (
        <div className={styles.loginError}>{error}</div>
      )}
    </form>
  );
}
