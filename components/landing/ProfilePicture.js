import Image from 'next/image'
import styled, { keyframes } from 'styled-components'

const fadeIn = keyframes`
  from {opacity: 0}
  to {opacity: 1}
`;

const Styled = styled.div`
    margin: 2rem 0 0rem 0;
    animation: ${fadeIn} 0.5s linear;
`

const ProfilePicture = () => (
  <Styled>
    <Image
      src="/images/profile.png" 
      height={200} 
      width={200} 
      alt="Pieter Van Eynde"
      priority
    />
  </Styled>
)

export default ProfilePicture