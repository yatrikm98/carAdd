import { configureStore } from "@reduxjs/toolkit";
import { carsReducer,addCar,removeCar,changesearchTerm } from "./slice/carsSlice";
import { changeCost,changeName,formReducer } from "./slice/formSlice";


const store=configureStore({
    reducer:{
        cars:carsReducer,
        form:formReducer
    }
})

export {store,changeName,changeCost,addCar,removeCar,changesearchTerm};