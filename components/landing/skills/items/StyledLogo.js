import Image from 'next/image'
import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { TSWrapper, TSTitle } from './itemStyles'


const MyStyledLogo = styled(Image)`
    src: '/images/skills/StyledLogoForDark.png';
`

export const StyledLogo = () => {
    const dark = useSelector(state => state.general.darkTheme)
    const src = dark ? '/images/skills/StyledLogoForDark.png' : '/images/skills/StyledLogoForLight.png'

    return(
        <TSWrapper href='https://styled-components.com/' title='Styling Components'>
                <MyStyledLogo
                    src={src}
                    alt='logo'
                    width={60}
                    height={50}
                />  
                <TSTitle>Styled Components</TSTitle>
        </TSWrapper>
        )
    }

export default StyledLogo

