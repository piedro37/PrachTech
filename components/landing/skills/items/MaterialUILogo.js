import Image from 'next/image'
import React from 'react'
import { TSWrapper, TSTitle } from './itemStyles'

export const MaterialUILogo = () => {
    return(
        <TSWrapper href='https://material-ui.com' title='UI Library'>
            <Image
                src='/images/skills/MaterialUILogo.png' 
                alt='firebase-logo'
                width={60}
                height={60}
            />             
            <TSTitle>Material-UI</TSTitle>
        </TSWrapper>
    )
}
export default MaterialUILogo

