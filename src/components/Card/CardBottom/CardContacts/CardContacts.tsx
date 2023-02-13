import React from "react";
import { Email } from "../../../Icons/Email";
import { Tel } from "../../../Icons/Tel";
import styles from "./cardcontacts.module.css";

interface ICardContactsProps {
  email?: string;
}

export function CardContacts({ email }: ICardContactsProps) {
  return (
    <div className={styles.contacts}>
      <div className={styles.contact}>
        <Tel />
        <p className={styles.contactValue}>+7 (954) 333-44-55</p>
      </div>
      <div className={styles.contact}>
        <Email />
        <p className={styles.contactValue}>{email}</p>
      </div>
    </div>
  );
}
