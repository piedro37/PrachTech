import React from 'react'
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { closeSnackbar } from "lib/slices/generalSlice";
import { useDispatch, useSelector } from "react-redux";


const MySnackBar = () => {
    const snackbar = useSelector(state => state.general.snackbar)
    const open = snackbar?.open
    const type = snackbar?.type
    const message = snackbar?.message
    const dispatch = useDispatch()

    const handleClose = () => {
        dispatch(closeSnackbar())
    }
    return (
        <Snackbar 
            open={open} 
            autoHideDuration={3000} 
            onClose={handleClose}
        >
            <MuiAlert 
                onClose={handleClose} 
                severity={type}
                elevation={6} 
                variant="filled"
            >
                {message}
            </MuiAlert>
        </Snackbar>
    )
}

export default MySnackBar


