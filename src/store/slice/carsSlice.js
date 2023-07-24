import { createSlice, nanoid } from "@reduxjs/toolkit";

const carsSlice = createSlice({
    name: 'cars',
    initialState: {
        searchTerm: '',
        data: []
    },
    reducers: {
        changesearchTerm(state, action) {
            state.searchTerm = action.payload
        },
        addCar(state, action) {
            // Assumption action.payload conatins an object {name:dewdwe, cost :ewn}
            state.data.push({
                name: action.payload.name,
                cost: action.payload.cost,
                id: nanoid()
            })
        },

        removeCar(state, action) {
            const updated = state.data.filter((car) => {
                return car.id !== action.payload
            })
            state.data = updated;
        }  
    }
})


export const { changesearchTerm, addCar, removeCar } = carsSlice.actions;
export const carsReducer = carsSlice.reducer; 