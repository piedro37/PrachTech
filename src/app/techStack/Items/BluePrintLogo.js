import React from 'react'
import styled from 'styled-components'
import { TSWrapper, TSTitle } from './itemStyles'
import logo from 'resources/imgs/BluePrintLogo.png'


const MyLogo = styled.img`
    height: 60px;
`

export const BluePrintLogo = () => 
    <TSWrapper href='https://blueprintjs.com' title='A handy UI toolkit'>
        <MyLogo src={logo} alt='logo'/>
        <TSTitle>Blueprint</TSTitle>
    </TSWrapper>

export default BluePrintLogo

