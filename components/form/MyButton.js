import styled from 'styled-components'
import { Button } from '@material-ui/core'
import CircularProgress from '@material-ui/core/CircularProgress'


export const StyledButton = styled(Button)`
    background-color: ${props => props.disabled ? 'lightgrey !important' : `${props.theme.contrast} !important`};
    
    color: white !important;
    min-width: 120px !important;

    /* &:hover {
        background-color: ${props => props.theme.red} !important;
    } */
    
    a {
        color: white !important;
    }
`

export const StyledProgress = styled(CircularProgress)`
    color: white !important;  
`

/** General functionality styled MUI button with expected props: 
 * title, text, endIcon, type, ... */
export const MyButton = (props) => {
    const { children, text, loading, fullWidth, endIcon, disabled, variant } = props 

    const loadingIndicator = loading && <StyledProgress size='1.5rem'/>
    
    return (
        <StyledButton 
            {...props}
            loading='-' //workaround for console warning
            variant={variant || 'contained'}
            disabled={loading || disabled}
            fullWidth={fullWidth}
            endIcon={!loading && endIcon}
        > 
            {
                loadingIndicator || text || children
            }
        </StyledButton>
    )
}

export default MyButton
