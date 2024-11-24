import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterReducer";
import usersReducer from "./usersReducer";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    users: usersReducer,
  },
});
