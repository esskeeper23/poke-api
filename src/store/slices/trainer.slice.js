import {createSlice} from '@reduxjs/toolkit'

export const trainerSlice = createSlice({
    name: "trainer",
    initialState: "",
    reducers: {
        setTrainer: (state, action) => action.payload
    }
})

export default trainerSlice.reducer

export const {setTrainer} = trainerSlice.actions
