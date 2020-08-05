import React from 'react'
import styled from 'styled-components'
import { TSWrapper, TSTitle } from './itemStyles'
import logo from 'resources/imgs/FormikLogo.png'


const MyLogo = styled.img`
    height: 60px;
`

export const FormikLogo = () => 
        <TSWrapper href='https://formik.org/' title='Form Library'>
            <MyLogo src={logo} alt='logo'/>
            <TSTitle>Formik</TSTitle>
        </TSWrapper>
    
export default FormikLogo

