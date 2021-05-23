import styled, { keyframes } from 'styled-components'
import { SmallText } from 'styles/shared';

const fadeIn = keyframes`
  from {opacity: 0}
  to {opacity: 1}
`;

export const TSWrapper = styled.a`
    padding: 1rem 0.5rem 0 0.5rem;
    margin: 0.3rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    animation: ${fadeIn} 1s linear;
    width: 100px;
    border: 1px solid transparent;
    border-radius: 10px;
    transform: none;
    transition-duration: 0.5s;
    
    &:hover {
        text-decoration: none;
        transform: translateY(-5px);
        transition-duration: 0.5s;
        /* transition-duration: 2s; */
        border: 1px solid ${props => props.theme.accentBorder};
    }
`

export const TSTitle = styled(SmallText)`
`
