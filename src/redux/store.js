import {configureStore} from "@reduxjs/toolkit";
import studentReducer from './slices/studentslice'
 const store =configureStore({
    reducer:{
        students:studentReducer
    }
})
export default store