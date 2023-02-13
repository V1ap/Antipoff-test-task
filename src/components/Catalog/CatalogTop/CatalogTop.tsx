import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { removeUser } from "../../../store/slice/userSlice";
import { removeUserLS } from "../../../utils/storageUser";
import { Exit } from "../../Icons/Exit";
import { Button } from "../../ui/Button";
import styles from "./catalogtop.module.css";

export function CatalogTop() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(removeUser());
    removeUserLS();
    navigate("/signup");
  };

  return (
    <div className={styles.catalogTop}>
      <h1 className={styles.catalogHeader}>Наша команда</h1>
      <p className={styles.catalogDescriptions}>
        Это опытные специалисты, хорошо разбирающиеся во всех задачах, которые
        ложатся на их плечи, и умеющие находить выход из любых, даже самых
        сложных ситуаций.{" "}
      </p>
      <Button onClick={handleClick} className={styles.catalogBtnExit}>
        Выход
      </Button>
      <button onClick={handleClick} className={styles.catalogBtnExitMobile}>
        <Exit />
      </button>
    </div>
  );
}
