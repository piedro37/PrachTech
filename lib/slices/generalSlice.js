import { createSlice } from '@reduxjs/toolkit'

export const general = createSlice({
  name: 'general',
  initialState: {
    darkTheme: true,
  },
  reducers: {
    toggleTheme: (state) => {
      state.darkTheme = !state.darkTheme
    },
  },
})

export const { toggleTheme } = general.actions

export default general.reducer