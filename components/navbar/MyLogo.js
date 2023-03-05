import Link from 'next/link'
import styled from 'styled-components'

const Name = styled.div`
    margin-left: 10px;
    color: ${props => props.theme.primary};
`

const LogoImg = styled.div`
    width: 25px;
    height: 25px;
    background: url(${props => props.theme.logo});
    background-repeat: no-repeat;
    background-size: contain;


`

const StyledLogo = styled.div`
    padding: 0.4rem;
    border-radius: 0.3rem;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover ${LogoImg} {
        background: url(${props => props.theme.logoHover});
        background-repeat: no-repeat;
        background-size: contain;
    }

    &:hover ${Name} {
        color: ${props => props.theme.hover};
    }

    /* &:hover {
        background-color: ${props => props.theme.buttonHoverBackground}
    } */
`

const MyLogo = () => {
    return (
        <StyledLogo title='PrachTech home.'>
            <Link href='/' >
                <a>
                    <LogoImg />
                    <Name>PrachTech</Name>
                </a>
            </Link>
        </StyledLogo>
    )
}

export default MyLogo


