import Image from 'next/image'
import React from 'react'
import { TSWrapper, TSTitle } from './itemStyles'


export const FirebaseLogo = () => 
        <TSWrapper href='https://firebase.google.com' title='The power of a backend'>
            <Image
                src='/images/skills/FirebaseLogo.png' 
                alt='logo'
                width={60}
                height={60}
            />            
            <TSTitle>Firebase</TSTitle>
        </TSWrapper>

export default FirebaseLogo

