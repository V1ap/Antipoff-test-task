import React, { useState } from "react";
import styles from "./signupform.module.css";
import { Passeye } from "../../Icons/Passeye";
import { useSignUp } from "../../../hooks/useSignUp";

export function SignUpForm() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [name, setName] = useState("");
  const [passCheck, setPassCheck] = useState("");
  const [passType, setPassType] = useState({
    pass: "password",
    passCheck: "password",
  });
  const [error, isLoading, signUp] = useSignUp(name, email, pass, passCheck);

  const handleLogin = (e: React.SyntheticEvent) => {
    e.preventDefault();
    signUp();
  };

  return (
    <form action="" className={styles.signupForm}>
      <div className={styles.signupInputContainer}>
        <label className={styles.signupLabel} htmlFor="name">
          Имя
        </label>
        <input
          className={styles.signupInput}
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Имя"
          name="name"
          aria-invalid={error.includes("Имя") ? "true" : undefined}
        />
        {error.includes("Имя") && (
          <div className={styles.signupError}>{error}</div>
        )}
      </div>
      <div className={styles.signupInputContainer}>
        <label className={styles.signupLabel} htmlFor="email">
          Электронная почта
        </label>
        <input
          className={styles.signupInput}
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="email"
          name="email"
          aria-invalid={error.includes("адрес") ? "true" : undefined}
        />
        {error.includes("адрес") && (
          <div className={styles.signupError}>{error}</div>
        )}
      </div>
      <div className={styles.signupInputContainer}>
        <label className={styles.signupLabel} htmlFor="password">
          Пароль
        </label>
        <input
          className={styles.signupInput}
          type={passType.pass}
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          placeholder="password"
          name="password"
          aria-invalid={
            error.toLocaleLowerCase().includes("пароль") ? "true" : undefined
          }
        />
        {error.toLocaleLowerCase().includes("пароль") && (
          <div className={styles.signupError}>{error}</div>
        )}
        <button
          type="button"
          className={styles.passBtn}
          onClick={() => {
            setPassType(
              passType.pass === "password"
                ? { pass: "text", passCheck: passType.passCheck }
                : { pass: "password", passCheck: passType.passCheck }
            );
          }}
        >
          <Passeye />
        </button>
      </div>
      <div className={styles.signupInputContainer}>
        <label className={styles.signupLabel} htmlFor="checkPassword">
          Подтвердите пароль
        </label>
        <input
          className={styles.signupInput}
          type={passType.passCheck}
          value={passCheck}
          onChange={(e) => setPassCheck(e.target.value)}
          placeholder="password"
          name="checkPassword"
          aria-invalid={error.includes("Пароли") ? "true" : undefined}
        />
        {error.includes("Пароли") && (
          <div className={styles.signupError}>{error}</div>
        )}
        <button
          type="button"
          className={styles.passBtn}
          onClick={() => {
            setPassType(
              passType.passCheck === "password"
                ? { passCheck: "text", pass: passType.pass }
                : { passCheck: "password", pass: passType.pass }
            );
          }}
        >
          <Passeye />
        </button>
      </div>

      <button
        className={styles.signupBtn}
        type="submit"
        onClick={(e) => handleLogin(e)}
        disabled={isLoading ? true : false}
      >
        Регистрация
      </button>
      {error.includes("Неизвестная") && (
        <div className={styles.signupError}>{error}</div>
      )}
    </form>
  );
}
