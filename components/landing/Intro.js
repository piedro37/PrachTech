import styled from 'styled-components'
import { CenterSection, fadeIn } from 'styles/shared'
import ProfilePicture from 'components/landing/ProfilePicture'

const Wrap = styled(CenterSection)`
    animation: ${fadeIn} 1s linear;
`

const Intro = (props) => {
    return (
        <Wrap>
			<ProfilePicture />

			<h1>Pieter Van Eynde</h1>
			{/* <h2>Freelance React Developer</h2> */}
			<p>Freelance React developer with a passion for new technologies and creating beautifull web-apps.</p>



        </Wrap>
    )
}

export default Intro
