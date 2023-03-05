import Link from 'next/link'
import styled from 'styled-components'


const Styled = styled.div`
    width: 100%;
    height: 4rem;
    border-top: 1px solid ${props => props.theme.border};
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${props => props.theme.p};
    font-size: 0.8rem;
    margin-top: auto;

    a:hover {
        text-decoration: underline;
    }

    div{
        margin-left: 5px;
        margin-right: 5px;
    }
`

const Footer = () => {
    return (
        <Styled>
            <div>Pieter Van Eynde - </div>
            <Link href='/' ><a>PrachTech BV</a></Link>
            {/* <div> - Nieuwstraat 17 - 9100 Sint-Niklaas - BE 0727 479 313</div> */}
        </Styled>
    )
}

export default Footer


