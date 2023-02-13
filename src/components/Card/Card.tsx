import React from "react";
import { CardTop } from "./CardTop";
import { CardBottom } from "./CardBottom";
import { useCard } from "../../hooks/useCard";

export function Card() {
  const [userData] = useCard();

  return (
    <div>
      <CardTop
        name={`${userData.first_name} ${userData.last_name}`}
        img={userData.avatar}
      />
      <CardBottom email={userData.email} />
    </div>
  );
}
