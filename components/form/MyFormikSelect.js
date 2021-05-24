import { MenuItem, TextField } from "@material-ui/core"


/** select material-ui textfield with 
 *  - some default options: 
 *      select, margin, variant, fullWidth, size, ...
 *  - a generic way of handling the formik-object
 *  - expected props in spreader: 
 *      items, name, label, type, required, autoFocus, InputLabelProps, formik, ... 
 * */
const MyFormikSelect = (props) => {
    const {
        name,
        size,
        margin,
        formik,
        items,
        value,
    } = props

    return (
        <TextField 
            {...props} 
            
            select
            size={size || 'medium'}
            margin={margin || 'normal'}
            variant="outlined"
            fullWidth

            value={value || formik.values[name] || ''}
            onChange={formik.handleChange}
            // error={formik.touched[name] && Boolean(formik.errors[name])}
            // helperText={formik.touched.groupname && formik.errors.groupname}
        >
            {
                items?.map((item, index) => {
                    return(
                        <MenuItem 
                            key={index} 
                            value={item}
                        >
                                {item}
                        </MenuItem>
                    )
                })
            }
        </TextField>
    )
}

export default MyFormikSelect
