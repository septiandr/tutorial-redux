import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../feature/productSlice";
console.log(productReducer)
export const store = configureStore({
    reducer:{
        product : productReducer
    }
})