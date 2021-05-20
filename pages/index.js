import PageLayout from '../components/general/PageLayout'
import styled from 'styled-components'
import Card from '../components/landing/Card'
import ProfilePicture from '../components/landing/ProfilePicture'
import { pages } from '../lib/pages'

const Description = styled.p`
	text-align: center;
`

const Grid = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-wrap: wrap;
	margin-top: 3rem;

	@media (max-width: 600px) {
		width: 100%;
		flex-direction: column;
	}

`



export default function Home() {
  return (
	<PageLayout title='PrachTech'>


			<ProfilePicture />

			<h1>Pieter Van Eynde</h1>

			<h2>React Developer - Freelancer</h2>

			<Description>
				Master in electronics, manager and teamleader but returned to my old love ... developing. And now very happy to commit myself full-time to creating beautifull web apps, to work with the technologies of the future and to be creative again.
			</Description>

			<h1>Demo projects</h1>

			<Description>
				Check out the features and try the live demo.
			</Description>

			<Grid>
				{
					Object.values(pages).map(page => {
						return(
							<Card {...page} key={page.title}/>
						)
					})
				}
			</Grid>


    </PageLayout>
  )
}
