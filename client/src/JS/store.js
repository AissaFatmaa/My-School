import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice/userSlice";
import clubSlice from "./clubSlice";
import eventSlice from "./eventSlice";

export const store = configureStore({
  reducer: {
    user: userSlice,
    club: clubSlice,
    event: eventSlice,
  },
});
