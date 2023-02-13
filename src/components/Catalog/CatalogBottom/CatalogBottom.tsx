import React, { useState } from "react";
import styles from "./catalogbottom.module.css";
import { CatalogItem } from "./CatalogItem";
import { Arrow } from "../../Icons/Arrow";
import { getLikedIdLS } from "../../../utils/storageLikes";
import { useCatalogList } from "../../../hooks/useCatalogList";

export function CatalogBottom() {
  const [page, setPage] = useState(1);
  const handleClick = () => {
    setPage(page + 1);
  };
  const [userData, isEndOfList] = useCatalogList(page);

  const likedArray = getLikedIdLS();

  return (
    <div className={styles.catalogBody}>
      <ul className={styles.catalogBodyList}>
        {userData.map((el) => (
          <CatalogItem
            name={el.first_name + " " + el.last_name}
            img={el.avatar}
            key={el.id}
            id={el.id}
            like={likedArray.includes(el.id)}
          />
        ))}
      </ul>
      {!isEndOfList && (
        <button className={styles.catalogNextPageBtn} onClick={handleClick}>
          Показать еще <Arrow />
        </button>
      )}

      {isEndOfList && (
        <p className={styles.endOflist}>Больше пользователей не найдено</p>
      )}
    </div>
  );
}
