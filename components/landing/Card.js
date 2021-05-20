import styled from 'styled-components'
import Link from 'next/link'

const Styled = styled.div`
    margin: 1rem;
    flex-basis: 45%;
    padding: 1.5rem;
    text-align: left;
    text-decoration: none;
    border: 1px solid ${props => props.theme.border};
    border-radius: 10px;
    transition: color 0.15s ease, border-color 0.15s ease;

    &:hover,
    &:focus,
    &:active {
        color: ${props => props.theme.hover};
        border-color: ${props => props.theme.hover};
        /* background-color: ${props => props.theme.buttonHoverBackground} */
    }

    h3 {
        margin: 0 0 1rem 0; 
        font-size: 1.5rem;
    }

    p {
        margin: 0;
        font-size: 1.25rem;
        line-height: 1.5;
    }
`

const Card = ({title, description, href}) => {
    return (
        <Styled>
        <Link href={href} >
            <a>
                <h3>{title} &rarr;</h3>
                <p>{description}</p>
            </a>
        </Link>
        </Styled>
    )
}

export default Card
