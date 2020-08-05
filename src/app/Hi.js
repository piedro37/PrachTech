import React from 'react'
import {useSpring, animated} from 'react-spring'
import { colors } from 'resources/constants'
import styled, { keyframes } from 'styled-components'
import Divider from 'components/Divider';
import { Element } from 'react-scroll';

//styled-component basic usage
const Wrapper = styled.section`
    padding: 4em;
    background: ${colors.primary};
    display: flex;
    flex-direction: column;
    align-items: center;
`

//styled-component combined with react-spring
const Name = styled(animated.h1)`
    margin-top: 1em;
    color: white;
`

//styled-component animated without react-spring
export const fadeIn = keyframes`
  from {opacity: 0}
  to {opacity: 1}
`;

const Subtitle = styled.h5`
    color: white;
    animation: ${fadeIn} 2s linear;
`
const Description = styled.div`
    color: white;
    animation: ${fadeIn} 2s linear;
    max-width: 600px;
`


export const Hi = () => {
    //react-spring basic usage
    const pictureProps = useSpring({
        opacity: 1, 
        from: {opacity: 0}, 
        config: { duration: 500 },
        })

    const nameProps = useSpring({
        opacity: 1, 
        from: {opacity: 0}, 
        config: { duration: 1000 },
        })


    return (
        <span>
        <Element name='about'/>
        <Wrapper >
            <animated.div style={pictureProps}><img src={require('../resources/imgs/ProfilePicture.png')} alt='Profile' width={200}/></animated.div>
            <Name style={nameProps}>Pieter Van Eynde</Name>
            <Divider color='white' />
            <Subtitle>React Developer - Freelancer</Subtitle>
            <Description>Master in electronics, manager and teamleader but returned to my old love ... developing. And now, very happy and very lucky to be able to commit myself full-time to creating beautifull web apps, to work with the technologies of the future and to be creative again <span role='img' aria-label='emoji'>😍</span> </Description>
        </Wrapper>
        </span>

    )
}

export default Hi

