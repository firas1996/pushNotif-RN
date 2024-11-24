import { createSlice } from "@reduxjs/toolkit";
import { getUsers } from "./usersAction";

const initialState = {
  users: [],
};
export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getUsers.fulfilled, (state, action) => {
      state.users = action.payload;
    });
    builder.addCase(getUsers.pending, (state, action) => {
      state.users = [1, 2, 3];
    });
  },
});
export default usersSlice.reducer;
