import React from 'react'
import styled from 'styled-components'
import { TSWrapper, TSTitle } from './itemStyles'
import logo from 'resources/imgs/StyledLogo.png';


const MyLogo = styled.img`
    background-color: #3D3D3D;
    color: #3D3D3D;
    height: 60px;
`

export const StyledLogo = () => 
    <TSWrapper href='https://styled-components.com/' title='Styling Components'>
        <MyLogo src={logo} alt='StyledLogo' />
        <TSTitle>Styled Components</TSTitle>
    </TSWrapper>

export default StyledLogo

