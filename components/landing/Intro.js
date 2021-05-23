import styled from 'styled-components'
import { CenterSection, FlexRowWrap, JustifyText } from 'styles/shared'
import ProfilePicture from 'components/landing/ProfilePicture'


const Intro = (props) => {
    return (
        <CenterSection>
			<ProfilePicture />

			<h1>Pieter Van Eynde</h1>
			{/* <h2>Freelance React Developer</h2> */}
			<p>Freelance React developer with a passion for new technologies and creating beautifull web-apps.</p>



        </CenterSection>
    )
}

export default Intro
