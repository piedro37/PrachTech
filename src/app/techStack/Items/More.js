import React from 'react'
import styled from 'styled-components'
import { TSWrapper, TSTitle } from './itemStyles'
import { FiMoreHorizontal } from 'react-icons/fi'


const MyLogo = styled(FiMoreHorizontal)`
    padding: 20px 20px 0 20px;
`

export const More = () => {
    return(
        <TSWrapper>
            <MyLogo alt='logo' size={60}/>
            <TSTitle>And more</TSTitle>
        </TSWrapper>
    )
}
export default More

