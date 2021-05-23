import React from 'react'
import styled from 'styled-components'
import { TSWrapper, TSTitle } from './itemStyles'
import { SiNextDotJs } from 'react-icons/si'


const MyNodeLogo = styled(SiNextDotJs)`
    color: ${props => props.theme.primary};
`

export const NextLogo = () => 
        <TSWrapper href='https://nextjs.org/' title='Production grade react.'>
            <MyNodeLogo alt='next-logo' size={60}/>
            <TSTitle>Next.js</TSTitle>
        </TSWrapper>
    


export default NextLogo

