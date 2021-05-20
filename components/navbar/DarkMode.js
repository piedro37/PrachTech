import styled from 'styled-components'
import { RiMoonFill } from 'react-icons/ri'
import { BiSun } from 'react-icons/bi'
import { toggleTheme } from '../../lib/slices/generalSlice'
import { useDispatch, useSelector } from 'react-redux'


const Styled = styled.div`
    margin-left: auto;
    padding: 0.4rem;
    border-radius: 0.2rem;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
        color: ${props => props.theme.hover};
        cursor: pointer;
        background-color: ${props => props.theme.buttonHoverBackground}
    }
`

const DarkMode = () => {
    const dispatch = useDispatch()
    const dark = useSelector(state => state.general.darkTheme)

    const handleClick = () => {
        dispatch(toggleTheme())
    }

    return (
        <Styled
            title='Toggle dark mode'
            onClick={handleClick}
        >
            { dark ? <BiSun size={20} /> : <RiMoonFill size={20} /> }
        </Styled>
    )
}

export default DarkMode


