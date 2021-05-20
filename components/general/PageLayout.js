
import styled, { ThemeProvider } from 'styled-components'
import Footer from './Footer'
import Head from 'next/head'
import Navbar from '../navbar/Navbar'
import { darkTheme, lightTheme } from '../../styles/themes'
import { useSelector } from 'react-redux'

const Container = styled.div`
    min-height: 100vh;
    padding: 1rem 0.5rem 0 0.5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: ${props => props.theme.background};
    color: ${props => props.theme.primary};

    h1 {
        color: ${props => props.theme.h1};
        line-height: 1.15;
        font-size: 2.8rem;
        margin: 3rem 0 0.5rem 0;
    }
    
    h2 {
        color: ${props => props.theme.h2};
        font-size: 1.5rem;
        margin: 0.5rem 0;
    }

    h3 {
        color: ${props => props.theme.h3};
    }

    p {
        color: ${props => props.theme.p};
        line-height: 1.5;
    }
    
    a:hover {
        color: ${props => props.theme.hover};
    }
`

const Main = styled.div`
    padding: 5rem 1rem;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 800px;
`

/** Layout used for all pages */
const PageLayout = ({ children, title }) => {
    const dark = useSelector(state => state.general.darkTheme)


    return (
        <ThemeProvider theme={dark ? darkTheme : lightTheme}>
            <Container>
                <Head>
                    <title>{title}</title>
                    <link rel="icon" href="/favicon.ico" />
                    <meta
                        name="description"
                        content="PrachTech - Pieter Van Eynde - Freelance React Developer."
                    />
                </Head>
                <Navbar />

                <Main>
                    {children}
                </Main>
                <Footer />
            </Container>
        </ThemeProvider>
    )
}

export default PageLayout
