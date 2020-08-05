import React from 'react'
import styled from 'styled-components'
import { TSWrapper, TSTitle } from './itemStyles'
import logo from 'resources/imgs/FirebaseLogo.png'


const MyLogo = styled.img`
    height: 60px;
`

export const FirebaseLogo = () => 
        <TSWrapper href='https://firebase.google.com' title='The power of a backend'>
            <MyLogo src={logo} alt='logo'/>
            <TSTitle>Firebase</TSTitle>
        </TSWrapper>

export default FirebaseLogo

