import React from 'react'
import styled, { keyframes } from 'styled-components'
import { TSWrapper, TSTitle } from './itemStyles'
import { FaNodeJs } from 'react-icons/fa'


const MyNodeLogo = styled(FaNodeJs)`
    color: #3C873A;
`

export const NodeLogo = () => 
        <TSWrapper href='https://nodejs.org/en/' title='Node.js'>
            <MyNodeLogo alt='node-logo' size={60}/>
            <TSTitle>Node.js</TSTitle>
        </TSWrapper>
    


export default NodeLogo

