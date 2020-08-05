import React from 'react'
import { FaGithub } from 'react-icons/fa'
import { Button } from 'components/Button';



export const GithubButton = () => {
    
    const handleClick = () => {
        window.open('https://github.com/piedro37/prachtech', '_blank')
    }

    return(
        <Button 
            onClick={handleClick}
            icon={<FaGithub size={20}/>}
            text='Github'
        />
            
       )
    }


    
export default GithubButton

