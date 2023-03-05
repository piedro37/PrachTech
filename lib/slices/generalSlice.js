import { createSlice } from '@reduxjs/toolkit'

export const general = createSlice({
  name: 'general',
  initialState: {
    darkTheme: true,
    snackbar: { open: false },
  },
  reducers: {
    toggleTheme: (state) => {
      state.darkTheme = !state.darkTheme
    },
    openSnackbar: (state, action) => {
      state.snackbar = {
        open: true,
        type: action.payload.type,
        message: action.payload.message,
      }
    },
    closeSnackbar: (state, action) => {
      state.snackbar = {
        open: false,
      }
    },
  },
})

export const { toggleTheme, openSnackbar, closeSnackbar } = general.actions

export default general.reducer