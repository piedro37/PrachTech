import React from 'react'
import styled from 'styled-components'
import { TSWrapper, TSTitle } from './itemStyles'
import logo from 'resources/imgs/Auth0Logo.png'


const MyLogo = styled.img`
    height: 60px;
`

export const Auth0Logo = () => 
        <TSWrapper href='https://auth0.com/' title='User Authentication'>
            <MyLogo src={logo} alt='logo'/>
            <TSTitle>Auth0</TSTitle>
        </TSWrapper>
    
export default Auth0Logo

