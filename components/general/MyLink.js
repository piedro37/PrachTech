import Link from 'next/link'
import styled from 'styled-components'
import { darkTheme } from '../../styles/themes'


const Styled = styled.div`
    /* color: ${darkTheme.primary}; */
`

const MyLink = ({children, href, text, title }) => {
    return (
      <Styled title={title}>
        <Link href={href}>{text || children}</Link>
      </Styled>
    );
}

export default MyLink
