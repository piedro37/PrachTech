import React from 'react'
import styled, { keyframes } from 'styled-components'
import { TSWrapper, TSTitle } from './itemStyles'
import logo from 'resources/imgs/ReduxLogo.svg';


const appLogoFloat = keyframes `
    0% { transform: translateY(0) }
    50% { transform: translateY(10px) }
    100% { transform: translateY(0px) }
`

const MyReduxLogo = styled.img`
    height: 60px;
    animation: ${appLogoFloat} infinite 3s ease-in-out;
    margin-bottom: 5px;
`

export const ReduxLogo = () => 
    <TSWrapper href='https://react-redux.js.org/' title='Centralized application state'>
        <MyReduxLogo src={logo} alt='Redux-logo'/>
        <TSTitle>Redux</TSTitle>
    </TSWrapper>

export default ReduxLogo

