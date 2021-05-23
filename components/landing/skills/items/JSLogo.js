import React from 'react'
import styled from 'styled-components'
import { TSWrapper, TSTitle } from './itemStyles'
import { DiJavascript1 } from 'react-icons/di'


const MyJsLogo = styled(DiJavascript1)`
    color: black;
    background-color: #F7DF1C;
    padding: 20px 0 0 20px;;
`

export const JSLogo = () => 
    <TSWrapper href='https://developer.mozilla.org/nl/docs/Web/JavaScript' title='Lightweight, powerfull'>
        <MyJsLogo alt='JS-logo' size={60}/>
        <TSTitle>JavaScript</TSTitle>
    </TSWrapper>

export default JSLogo

