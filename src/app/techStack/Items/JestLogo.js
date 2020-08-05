import React from 'react'
import styled from 'styled-components'
import { TSWrapper, TSTitle } from './itemStyles'
import logo from 'resources/imgs/JestLogo.png'


const MyLogo = styled.img`
    height: 60px;
`

export const JestLogo = () => {
    return(
        <TSWrapper href='https://jestjs.io' title='Testing Framework'>
            <MyLogo src={logo} alt='logo'/>
            <TSTitle>Jest</TSTitle>
        </TSWrapper>
    )
}
export default JestLogo

