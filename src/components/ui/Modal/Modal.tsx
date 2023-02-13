import React from "react";
import styles from "./modal.module.css";

interface IModalProps {
  children: React.ReactNode;
  header: string;
}

export function Modal({ children, header }: IModalProps) {
  return (
    <div className={styles.container}>
      <div className={styles.modal}>
        <h2 className={styles.modalHeader}>{header}</h2>
        {children}
      </div>
    </div>
  );
}
