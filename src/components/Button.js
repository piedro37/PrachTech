import React from 'react'
import styled from 'styled-components'
import { colors } from 'resources/constants';

const MyButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 8rem;
    height: 2.5rem;
    border-radius: 3px;
    margin: 2rem auto;
    background: ${colors.primary};
    color: white;
    border: none;
    &:hover {
        border: none;
        color: white;
        background-color: ${colors.secondary};
        text-decoration: none;
        cursor: pointer;
        transition: background-color 1s;
    }
    &:focus {
        outline:0;
        }
    div {
        margin-left: 1rem;
    }
    `



export const Button = ({onClick, text, icon, type}) => 
    <MyButton
        onClick={onClick}
        type={type}
    >
        {icon}
        <div>{text}</div>
    </MyButton>


    
export default MyButton

