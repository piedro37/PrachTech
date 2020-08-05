import React from 'react'
import styled from 'styled-components'
import { TSWrapper, TSTitle } from './itemStyles'


const MyTsLogo = styled.div`
    height: 60px;
    width: 60px;
    color: white;
    background-color: #0177C7;
    padding: 20px 5px 5px 20px;
    font-weight: bold;
    font-size: 28px;
`

export const TSLogo = () => 
    <TSWrapper href='https://www.typescriptlang.org/' title='Scale'>
        <MyTsLogo alt='TS-logo'>TS</MyTsLogo>
        <TSTitle>TypeScript</TSTitle>
    </TSWrapper>

export default TSLogo

