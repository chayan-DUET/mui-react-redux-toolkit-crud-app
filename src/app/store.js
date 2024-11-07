
import { configureStore } from "@reduxjs/toolkit";
import olduserDetail from "features/olduserDetailSlice";


const store = configureStore({
  reducer: {
    appdata: olduserDetail,
  },
}); 
export default store;