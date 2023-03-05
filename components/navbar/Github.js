import styled from 'styled-components'
import { FaGithub } from 'react-icons/fa'


const Styled = styled.div`
    margin-left: 1rem;
    padding: 0.4rem;
    border-radius: 0.3rem;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
        color: ${props => props.theme.hover};
        cursor: pointer;
        background-color: ${props => props.theme.buttonHoverBackground}
    }
`

const Github = () => {

    const handleClick = () => {
        window.location.href = 'https://github.com/piedro37/prachtech';
    }

    return (
        <Styled
            title='Visit my github profile'
            onClick={handleClick}
        >
            <FaGithub size={20} />
        </Styled>
    )
}

export default Github


