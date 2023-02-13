export const setLikedIdLS = (likedArray: number[]) => {
  localStorage.setItem("liked", JSON.stringify(likedArray));
};

export const getLikedIdLS = () =>
  JSON.parse(localStorage.getItem("liked") || "[]");
