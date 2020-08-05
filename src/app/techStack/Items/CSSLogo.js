import React from 'react'
import styled from 'styled-components'
import { TSWrapper, TSTitle } from './itemStyles'
import { DiCss3 } from 'react-icons/di'


const MyCssLogo = styled(DiCss3)`
    color: #1B6FB5;
`

export const CSSLogo = () => 
    <TSWrapper title='Styling Basics'>
        <MyCssLogo alt='CSS-logo' size={60}/>
        <TSTitle>CSS</TSTitle>
    </TSWrapper>

export default CSSLogo

