import { TextField } from "@material-ui/core"
import styled from "styled-components"
import { mediumGrey } from "styles/themes"

const StyledTextfield = styled(TextField)`
    .MuiOutlinedInput-notchedOutline {
        border-color: ${props => props.theme.border};
    }
    
    input, textarea, .MuiFormLabel-root{
        color: ${mediumGrey};
    }
    
    .Mui-focused{
        color: ${props => props.theme.contrast} !important; 
    }
    
    .MuiOutlinedInput-root.Mui-focused  .MuiOutlinedInput-notchedOutline{
        border-color: ${props => props.theme.contrast} !important;
    }
    `
    
/* color: ${props => props.theme.p}; */


/** normal material-ui textfield with 
 *  - some default options: 
 *      margin, variant, fullWidth, size, ...
 *  - a generic way of handling the formik-object
 *  - expected props in spreader: 
 *      name, label, type, required, autoFocus, InputLabelProps, formik, ... 
 * */
const MyFormikField = (props) => {
    const {
        name,
        size,
        margin,
        formik,
    } = props

    return (
        <StyledTextfield 
            {...props} 
            
            size={size || 'medium'}
            margin={margin || 'normal'}
            variant="outlined"
            fullWidth

            value={formik.values[name] || ''}
            onChange={formik.handleChange}
            // error={formik.touched[name] && Boolean(formik.errors[name])}
            // helperText={formik.touched.groupname && formik.errors.groupname}
        />
    )
}

export default MyFormikField


