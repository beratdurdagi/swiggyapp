import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "./Redux/CartReducer";

export default configureStore({
    reducer:{
        cart:CartReducer
    }
})