import Image from 'next/image'
import React from 'react'
import { TSWrapper, TSTitle } from './itemStyles'


export const ReduxLogo = () => 
    <TSWrapper href='https://react-redux.js.org/' title='Centralized application state'>
        <Image
            src='/images/skills/ReduxLogo.svg' 
            alt='Redux-logo'
            width={60}
            height={60}
        />         
        <TSTitle>Redux</TSTitle>
    </TSWrapper>

export default ReduxLogo

