import React from "react";
import styles from "./button.module.css";

interface IButtonProps {
  children?: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export function Button({ children, className, onClick }: IButtonProps) {
  return (
    <button className={styles.customBtn + " " + className} onClick={onClick}>
      {children}
    </button>
  );
}
