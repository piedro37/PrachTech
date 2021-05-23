import { CenterSection } from "styles/shared"
import Card from 'components/landing/Card'
import { pages } from 'lib/pages'

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

const DemoProjects = () => {
    return (
        <CenterSection>
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
        </CenterSection>
    )
}

export default DemoProjects
