import { createSlice } from "@reduxjs/toolkit";

// export interface IInitialState {
//   user: {
//     name: string | null;
//     email: string | null;
//     token: string | null;
//     id: number | null;
//   };
// }

const initialState = {
  name: null,
  email: null,
  token: null,
  id: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, action) {
      state.email = action.payload.email;
      state.token = action.payload.token;
      state.id = action.payload.id;
      state.name = action.payload.name;
    },
    removeUser(state) {
      state.email = null;
      state.token = null;
      state.id = null;
      state.name = null;
    },
  },
});

export const { setUser, removeUser } = userSlice.actions;
export default userSlice.reducer;
