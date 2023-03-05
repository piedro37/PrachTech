import styled from 'styled-components'
import { darkTheme } from '../../styles/themes'
import DarkMode from './DarkMode'
import Github from './Github'
import MyLogo from './MyLogo'


const Container = styled.div`
    width: 100%;
    height: 4rem;
    background-color: ${props => props.theme.background};
    border-bottom: 1px solid ${props => props.theme.navbarBorder};
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    margin-bottom: auto;
    position: fixed;
    top: 0;

    z-index: 1000;
    
    a {
        display: flex;
        align-items: center;
    }
    
    `

const InnerWrap = styled.div`
    width: 800px;
    padding: 0 1rem 0 1rem;
    display: flex;
`



const Navbar = () => {
    return (
        <Container>
            <InnerWrap>
                <MyLogo />
                <DarkMode />
                <Github />
            </InnerWrap>
        </Container>
    )
}

export default Navbar


