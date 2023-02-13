import React from "react";
import { Link } from "react-router-dom";
import { Modal } from "../ui/Modal";
import { SignUpForm } from "./SignUpForm";

export function SignUp() {
  return (
    <div>
      <Modal header="Регистрация">
        <SignUpForm />
        <Link to={"/login"}>Войти в аккаунт</Link>
      </Modal>
    </div>
  );
}
