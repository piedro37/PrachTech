import styled from 'styled-components'
import { CenterSection, FlexRowWrap, JustifyText } from 'styles/shared'
import JSLogo from './items/JSLogo'
import ReactLogo from './items/ReactLogo'
import TSLogo from './items/TSLogo'
import Auth0Logo from './items/Auth0Logo'
import NodeLogo from './items/NodeLogo'
import NextLogo from './items/NextLogo'
import FirebaseLogo from './items/FirebaseLogo'
import StyledLogo from './items/StyledLogo'
import ReduxLogo from './items/ReduxLogo'
import MaterialUILogo from './items/MaterialUILogo'

const LogoWrap = styled(FlexRowWrap)`
    max-width: 560px; //560
    margin: 1.2rem auto;
    justify-content: center;
`

const Skills = (props) => {
    return (
        <CenterSection>
            <h1>Skills</h1>

            <JustifyText>
                Master in electronics, former manager and teamleader but returned to my old love ... developing. 
                Independent, teamplayer, focussed solution seeker, open communicator, gets the job done.
                I'm always learning but these are some tools I am familiar with and use to build things every day.
            </JustifyText>

            <LogoWrap>
                <JSLogo />
                <TSLogo />
                <ReactLogo />
                <NodeLogo />
                <NextLogo />
                <ReduxLogo />
                <FirebaseLogo />
                <Auth0Logo /> 
                <StyledLogo /> 
                <MaterialUILogo /> 
            </LogoWrap> 

        </CenterSection>
    )
}

export default Skills
