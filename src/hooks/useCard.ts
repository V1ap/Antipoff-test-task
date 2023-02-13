import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

interface IUserData {
  first_name: string;
  last_name: string;
  avatar: string;
  email: string;
}

export const useCard = () => {
  const { id } = useParams();
  const [userData, setUserData] = useState<IUserData>({
    first_name: "",
    last_name: "",
    avatar: "",
    email: "",
  });

  useEffect(() => {
    axios.get("https://reqres.in/api/users/" + id).then((res) => {
      const data = res.data.data;
      setUserData(data);
    });
  }, []);
  return [userData];
};
