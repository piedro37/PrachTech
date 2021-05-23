import Image from 'next/image'
import styled from 'styled-components'
import { CenterSection, FlexCol } from 'styles/shared'
import { darkGrey2 } from 'styles/themes'


const ProjectWrap = styled.div`
    margin: 2rem auto;
    width: 46rem;
    height: 20rem;

    @media (max-width: 800px) {
        width: 28rem;
    }
`

const ProjectLogo = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 25rem;
    height: 20rem;
    background-color: white;
    border-radius: 1rem;
    transform: none;
    transition-duration: 0.5s;
    margin-left: ${props => props.uneven ? 'auto' : ''};
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25);

    &:hover {
        transform: translateY(-10px);
        transition-duration: 0.5s;
        cursor: pointer;
    }

    @media (max-width: 800px) {
        width: 28rem;
        /* padding: 0 1rem; */
    }

`

const ProjectInfo = styled(FlexCol)`
    align-items: ${props => props.uneven ? 'start' : 'flex-end'};
    width: 25rem;
    height: 20rem;
    position: relative;
    top: -20rem;
    margin-left: ${props => !props.uneven ? 'auto' : ''};
    margin-right: ${props => props.uneven ? 'auto' : ''};
    z-index: 1;
    border-radius: 1rem;

    @media (max-width: 800px) {
        width: 28rem;
        padding: 0 1rem;
    }
`

const Title = styled.h2`
    margin-bottom: 0.5rem;

    @media (max-width: 800px) {
        color: black !important;
    }
`

const Short = styled.p`
    margin-top: 0rem;

    @media (max-width: 800px) {
        color: ${darkGrey2} !important;
    }
`

const Description = styled.p`
    /* text-align: right; */
    text-align: justify;
    background-color: ${props => props.theme.background};
    opacity: 0.9;
    border-radius: 5px;
    padding: 0.5rem;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25);
`


const Outro = styled.p`
    margin-top: auto;
    margin-bottom: 0.2rem;
    font-size: 0.8rem;
    line-height: 1rem;
    text-align: right;

    @media (max-width: 800px) {
        color: ${darkGrey2} !important;
    }
`

const RecentProjects = (props) => {


    return (
        <CenterSection>
            <h1>Recent Projects</h1>

            <ProjectWrap>
                <ProjectLogo onClick={()=>window.open('http://www.aptec.be', '_blank')}>
                    <Image
                        src='/images/projects/AptecLogo.png'
                        width={200}
                        height={80}
                        />
                </ProjectLogo>
                <ProjectInfo>
                    <Title>myAPTEC</Title>
                    <Short>a custom made online ERP</Short>
                    <Description>Manage your business online: accounts, contacts, products, quotes, invoices, stock, production, quality control, reports, an extranet for the customers,...</Description>
                    <Outro>
                        <div>Redux, Blueprint, Azure, Docker, Github Actions,...</div>
                        <div>Private project but demo coming soon</div>
                    </Outro>
                </ProjectInfo>
            </ProjectWrap>

            <ProjectWrap>
                <ProjectLogo onClick={()=>window.open('http://grensparkgidsen.vercel.app', '_blank')} uneven={true}>
                    <Image
                        src='/images/projects/GrensparkLogo.png'
                        width={200}
                        height={96}
                        />
                </ProjectLogo>
                <ProjectInfo uneven={true}>
                    <Title>Grenspark Gidsen</Title>
                    <Short>a custom made matching tool</Short>
                    <Description>In the public frontend, visitors can make a reservation of one of the guided tours. Admins can then select a suitable guide, communicate the match and manage the tours, visits, guides,...</Description>
                    <Outro>
                        <div>Nextjs, Formik, Firebase, Firestore, Material-UI,...</div>
                    </Outro>
                </ProjectInfo>
            </ProjectWrap>

        </CenterSection>
    )
}

export default RecentProjects
