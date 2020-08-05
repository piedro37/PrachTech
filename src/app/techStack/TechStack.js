import React from 'react'
import { colors } from 'resources/constants'
import Divider from 'components/Divider'
import ReactLogo from './Items/ReactLogo'
import JSLogo from './Items/JSLogo'
import ReduxLogo from './Items/ReduxLogo'
import TSLogo from './Items/TSLogo'
import CSSLogo from './Items/CSSLogo'
import SassLogo from './Items/SassLogo'
import StyledLogo from './Items/StyledLogo'
import BluePrintLogo from './Items/BluePrintLogo'
import BootstrapLogo  from './Items/BootstrapLogo'
import FirebaseLogo  from './Items/FirebaseLogo'
import MaterialUILogo  from './Items/MaterialUILogo'
import JestLogo  from './Items/JestLogo'
import FormikLogo from './Items/FormikLogo'
import Auth0Logo  from './Items/Auth0Logo'
import More from './Items/More'
import { Element } from 'react-scroll'
import GithubButton from './GithubButton'
import { Wrapper, ItemWrapper, Title, Description, Love } from './techStackStyles'




export const TechStack = () => {

    return (
        <Wrapper>
            <Element name='techstack' />
            <Title  > Tech Stack </Title>
            <Divider color={colors.secondary} />
            <Description>Technologies, frameworks and libraries I <Love size={15}/> to work with </Description>
            <ItemWrapper>
                <ReactLogo />
                <ReduxLogo />
                <JSLogo />
                <TSLogo />
                <FirebaseLogo />
                <Auth0Logo />
                <JestLogo />
                <FormikLogo />
                <CSSLogo />
                <SassLogo />
                <StyledLogo />
                <BluePrintLogo />
                <MaterialUILogo />
                <BootstrapLogo />
                <More />
            </ItemWrapper>
            <Description>
                Feel free to check out my Github profile. It's limited because most projects are private client projects but you get the idea <span role='img' aria-label='emoji'>😉</span>
                <GithubButton />
            </Description>
        </Wrapper>
    )
}

export default TechStack

