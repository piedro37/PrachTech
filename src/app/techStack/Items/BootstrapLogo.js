import React from 'react'
import styled from 'styled-components'
import { TSWrapper, TSTitle } from './itemStyles'
import logo from 'resources/imgs/ReactBootstrapLogo.png'


const MyLogo = styled.img`
    height: 60px;
`

export const BootstrapLogo = () => 
    <TSWrapper href='https://react-bootstrap.github.io/' title='Bootstrap for React'>
        <MyLogo src={logo} alt='logo'/>
        <TSTitle>React Bootstrap</TSTitle>
    </TSWrapper>

export default BootstrapLogo

