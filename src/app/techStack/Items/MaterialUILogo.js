import React from 'react'
import styled from 'styled-components'
import { TSWrapper, TSTitle } from './itemStyles'
import logo from 'resources/imgs/MaterialUILogo.png'


const MyLogo = styled.img`
    height: 60px;
`

export const MaterialUILogo = () => {
    return(
        <TSWrapper href='https://material-ui.com' title='UI Library'>
            <MyLogo src={logo} alt='logo'/>
            <TSTitle>Material-UI</TSTitle>
        </TSWrapper>
    )
}
export default MaterialUILogo

