import { createSlice } from "@reduxjs/toolkit";

export const locationSlice = createSlice({
    name: "location",
    initialState: {
        ref: null,
        currentLocation: null,
        locationArray: null,
        tracking: false,
    },
    reducers: {
        setReference: (state, action) => {
            state.ref = action.payload;
        },
        setTracking: (state, action) => {
            state.tracking = action.payload;
        },
        setCurrentLocation: (state, action) => {
            state.currentLocation = action.payload;
        },
        initLocationArray: (state) => {
            state.locationArray = [];
        },
        appendLocationToArray: (state, action) => {
            if (state.locationArray) {
                state.locationArray.push(action.playload)
            }
        },
    },
});

export const { 
    setReference, 
    setTracking, 
    setCurrentLocation, 
    initLocationArray, 
    appendLocationToArray, 
} = locationSlice.actions;
export default locationSlice.reducer;