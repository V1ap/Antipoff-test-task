import React from "react";
import { Link } from "react-router-dom";
import { Modal } from "../ui/Modal";
import { LoginForm } from "./LoginForm";

export function Login() {
  return (
    <Modal header="Вход в аккаунт">
      <LoginForm />
      <Link to={"/signup"}>Регистрация</Link>
    </Modal>
  );
}
