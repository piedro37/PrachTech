import React from 'react'
import styled from 'styled-components'
import { TSWrapper, TSTitle } from './itemStyles'
import { DiSass } from 'react-icons/di'


const MySassLogo = styled(DiSass)`
    color: #CD6699;
`

export const SassLogo = () => 
    <TSWrapper href='https://sass-lang.com/' title='CSS with superpowers'>
        <MySassLogo alt='Sass-logo' size={60}/>
        <TSTitle>Sass</TSTitle>
    </TSWrapper>

export default SassLogo

