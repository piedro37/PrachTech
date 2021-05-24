import React from 'react'
import TextField from '@material-ui/core/TextField';
import { Autocomplete } from '@material-ui/lab/';


export const MyFormikAutcomplete = (props) => {
    const {
        name,
        label,
        options,
        margin,
    } = props

    return(
        <Autocomplete
            id={name}
            freeSolo
            options={options}
            getOptionLabel={option => option?.value || ''}
            // defaultValue={props.value}
            onInputChange={(event, value)=>props.onChange(value)}

            renderInput={params => {
                // console.log(props.value)
                return(
                    <TextField 
                        {...params} 
                        label={label} 
                        name={name}
                        margin={margin || 'normal'}
                        variant="outlined" 
                        fullWidth 
                        // value={params.inputProps.value}
                        // value={props.value}
                        // placeholder={props.value}
                    />
                )}
        }
        />
        
    )
}

export default MyFormikAutcomplete