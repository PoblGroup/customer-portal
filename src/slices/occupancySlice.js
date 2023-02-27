import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    occupancy: null
}

export const occupancySlice = createSlice({
  name: 'occupancy',
  initialState,
  reducers: {
    setSelected: (state, action) => {
      state.occupancy = action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { setSelected } = occupancySlice.actions

export const selectOccupancy = (state) => state.occupancy.occupancy

export default occupancySlice.reducer