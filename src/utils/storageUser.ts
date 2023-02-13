interface IUserStorage {
  name: string;
  id: string;
  token: string;
  email: string;
}

export const updateUserLS = (user: IUserStorage) => {
  localStorage.setItem("user", JSON.stringify(user));
};

export const getUserLS = () =>
  JSON.parse(
    localStorage.getItem("user") ||
      '{"email":null,"id":null,"token":null,"name":null}'
  );

export const removeUserLS = () => {
  localStorage.removeItem("user");
};
