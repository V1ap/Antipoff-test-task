import React from "react";
import styles from "./cardbottom.module.css";
import { CardContacts } from "./CardContacts";
import { CardDescription } from "./CardDescription";

interface ICardBottomProps {
  email?: string;
}

export function CardBottom({ email }: ICardBottomProps) {
  return (
    <div className={styles.cardBottom}>
      <CardDescription />
      <CardContacts email={email} />
    </div>
  );
}
