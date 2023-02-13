import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { removeUser } from "../../../store/slice/userSlice";
import { removeUserLS } from "../../../utils/storageUser";
import { Back } from "../../Icons/Back";
import { Exit } from "../../Icons/Exit";
import { Button } from "../../ui/Button";
import styles from "./cardtop.module.css";

interface ICardTopProps {
  name?: string;
  img?: string;
}

export function CardTop({ name, img }: ICardTopProps) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleClickBack = () => {
    navigate("/menu");
  };

  const handleClickExit = () => {
    dispatch(removeUser());
    removeUserLS();
    navigate("/signup");
  };

  return (
    <div className={styles.cardTop}>
      <Button className={styles.cardTopBtnBack} onClick={handleClickBack}>
        Назад
      </Button>
      <button className={styles.cardTopBtnBackMobile} onClick={handleClickBack}>
        <Back />
      </button>
      <Button className={styles.cardTopBtnExit} onClick={handleClickExit}>
        Выйти
      </Button>
      <button className={styles.cardTopBtnExitMobile} onClick={handleClickExit}>
        <Exit />
      </button>
      <img src={img} alt="" className={styles.cardTopImg} />
      <div className={styles.cardTopDescription}>
        <h1 className={styles.cardTopName}>{name}</h1>
        <p className={styles.cardTopRole}>Партнер</p>
      </div>
    </div>
  );
}
