import styled, { keyframes } from 'styled-components'
import { colors } from 'resources/constants'
import { FaHeart } from 'react-icons/fa'

//styled-component basic usage
export const Wrapper = styled.section`
    padding: 2em 2em 0 2em;
    display: flex;
    flex-direction: column;
    align-items: center;
`
export const ItemWrapper = styled.section`
    /* padding: 2em; */
    display: flex;
    flex-direction: row;
    align-items: center;
    flex-wrap: wrap;
    max-width: 560px;
    margin: auto;
    padding-bottom: 40px;
`

//styled-component animated without react-spring
export const fadeIn = keyframes`
  from {opacity: 0}
  to {opacity: 1}
`;

export const pulse = keyframes`
  0% {
      transform: scale(1);
      opacity: 0.8;
      }
  50% {
      transform: scale(1.05);
      opacity: 1;
      }
  100% {
      transform: scale(1);
      opacity: 0.8;
      }
`;

export const Title = styled.h1`
    margin-top: 1em;
    color: ${colors.secondary};
    animation: ${fadeIn} 1s linear;
`

export const Description = styled.h6`
    color: ${colors.secondary};
    animation: ${fadeIn} 2s linear;
    margin-bottom: 1em;
    max-width: 540px;
`

export const Love = styled(FaHeart)`
    color: red;
    margin: 0 3px;
    animation: ${pulse} infinite 1s ;
`