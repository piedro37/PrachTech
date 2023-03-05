import React from 'react'
import { TSWrapper, TSTitle } from './itemStyles'
import Image from 'next/image'


export const Auth0Logo = () => 
        <TSWrapper href='https://auth0.com/' title='Authentication & Authorization'>
            <Image
                src='/images/skills/Auth0Logo.png' 
                alt='logo'
                width={60}
                height={60}
            />
            <TSTitle>Auth0</TSTitle>
        </TSWrapper>
    
export default Auth0Logo

