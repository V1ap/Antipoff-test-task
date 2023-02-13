import React, { useState } from "react";
import { Link } from "react-router-dom";
import { getLikedIdLS, setLikedIdLS } from "../../../../utils/storageLikes";
import { Like } from "../../../Icons/Like";
import styles from "./catalogitem.module.css";

interface ICatalogItemProps {
  img?: string;
  name?: string;
  id: number;
  like?: boolean;
}

export function CatalogItem({ img, name, id, like }: ICatalogItemProps) {
  const [liked, setLiked] = useState(!!like);
  const handleClick = () => {
    let likedArray = getLikedIdLS();
    liked
      ? (likedArray = likedArray.filter(
          (savedLikedId: number) => savedLikedId != id
        ))
      : likedArray.push(id);
    setLiked(!liked);
    setLikedIdLS(likedArray);
  };

  return (
    <li className={styles.catalogItem}>
      <img src={img} alt="" className={styles.catalogItemAvatar} />
      <Link to={"/card/" + id} className={styles.catalogItemName}>
        {name}
      </Link>
      <button onClick={handleClick} className={styles.catalogItemLike}>
        <Like liked={liked} />
      </button>
    </li>
  );
}
