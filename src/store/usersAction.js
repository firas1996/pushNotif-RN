import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// export const getUsers = createAsyncThunk("getUsers", async () => {
//   try {
//     const { data } = await axios.get("http://192.168.1.21:3000/users");
//     console.log("data: ", data.data.users);
//     return data.data.users;
//   } catch (err) {
//     console.log("a", err);
//   }
// });
export const getUsers = createAsyncThunk(
  "getUsers",
  axios
    .get("http://192.168.1.21:3000/users")
    .then((response) => {
      const users = response.data.data.users;
      console.log("Users: ", users);
      return users;
    })
    .catch((error) => {
      console.error("Error fetching users: ", error.message);
      throw error;
    })
);
