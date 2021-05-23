import React from 'react'
import styled, { keyframes } from 'styled-components'
import { TSWrapper, TSTitle } from './itemStyles'
import { FaReact } from 'react-icons/fa'


const appLogoSpin = keyframes `
    from { transform: rotate(0deg) }
    to { transform: rotate(360deg) }
`

const MyReactLogo = styled(FaReact)`
    color: #61DAFB;
    animation: ${appLogoSpin} infinite 20s linear;
`

export const ReactLogo = () => 
        <TSWrapper href='https://reactjs.org/' title='The place to be'>
            <MyReactLogo alt='react-logo' size={60}/>
            <TSTitle>React</TSTitle>
        </TSWrapper>
    


export default ReactLogo

