import {createSlice} from "@reduxjs/toolkit" 

const iState = {
    cars:["Model S", "Model 3", "Model X", "Model Y" ]
}

const carSlice = createSlice({
    name: "car",
    initialState,
    reducets: {}
})

export const selectCars = state => state.car.cars

export default carSlice.reducer