import { colors } from 'resources/constants'
import styled, { keyframes } from 'styled-components'

const fadeIn = keyframes`
  from {opacity: 0}
  to {opacity: 1}
`;

export const TSWrapper = styled.a`
    padding: 0.5em;
    margin: 0.3em;
    display: flex;
    flex-direction: column;
    align-items: center;
    animation: ${fadeIn} 1s linear;
    width: 100px;
    border: 1px solid white;
    &:hover {
        text-decoration: none;
        border: 1px solid ${colors.primary};
        border-radius: 3px;
        transition-duration: 2s;
    }
`

export const TSTitle = styled.h6`
    margin-top: 0.5em;
    color: ${colors.secondary};
    /* height: 2em; */
`
