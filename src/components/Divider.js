import React from 'react'
import styled, { keyframes } from 'styled-components'
import { MdStar } from 'react-icons/md';



//styled-component animated without react-spring
const fadeIn = keyframes`
  from {opacity: 0}
  to {opacity: 1}
`;

const Wrapper = styled.div`
    color: ${({color}) => color};
    display: flex;
    flex-direction: row;
    animation: ${fadeIn} 1s linear;
    margin: 1em 1em 1.5em 1em;
`

const DividerLine = styled.hr`
    background-color: ${({color}) => color};
    height: 1px;
    width: 70px;
    margin: 8px 20px;
`


export const Divider = ({ color }) => {

    return (
        <Wrapper color={color}>
            <DividerLine color={color}/>
            <MdStar/>
            <DividerLine color={color}/>
        </Wrapper>
    )
}

export default Divider

