import axios from "axios";
import { useEffect, useState } from "react";

interface IUserDataItem {
  first_name: string;
  last_name: string;
  id: number;
  avatar: string;
}

export const useCatalogList = (page: number): [IUserDataItem[], boolean] => {
  const [userData, setUserData] = useState<IUserDataItem[]>([]);
  const [isEndOfList, setIsEndOfList] = useState(false);

  useEffect(() => {
    axios
      .get("https://reqres.in/api/users?", {
        params: {
          per_page: 8,
          page: page,
        },
      })
      .then((resp) => {
        const data = resp.data.data;
        if (data.length < 8) setIsEndOfList(true);
        setUserData((prevState) => prevState.concat(...data));
      });
  }, [page]);

  return [userData, isEndOfList];
};
