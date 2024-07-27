import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import User from "../types/user";

type UserState = {
  users: User[];
};

const initialState: UserState = {
  users: [],
};

export const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<User>) => {
      state.users.push(action.payload);
    },
    editUser: (state, action: PayloadAction<User>) => {
      const user = state.users.find((user) => user.id === action.payload.id);
      if (user) {
        user.username = action.payload.username;
        user.email = action.payload.email;
      }
    },
    removeUser: (state, action: PayloadAction<User["id"]>) => {
      state.users = state.users.filter((user) => user.id !== action.payload);
    },
  },
});

export const { addUser, removeUser } = userSlice.actions;

export default userSlice.reducer;
