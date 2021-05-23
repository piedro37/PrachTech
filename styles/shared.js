import styled, { keyframes } from 'styled-components'

export const fadeIn = keyframes`
  from {opacity: 0}
  to {opacity: 1}
`;


export const FlexCol = styled.div`
    display: flex;
    flex-direction: column;
`

export const FlexRow = styled.div`
    display: flex;
    align-items: center;
`

export const FlexRowWrap = styled(FlexRow)`
    flex-wrap: wrap;
`

export const CenterSection = styled(FlexCol)`
    margin: 2rem 2rem 0rem 2rem;
    text-align: center;
`

export const JustifyText = styled.p`
    text-align: justify;
`

export const SmallText = styled.p`
    font-size: small;
`
