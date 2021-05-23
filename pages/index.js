import PageLayout from '../components/general/PageLayout'
import styled from 'styled-components'

import Skills from 'components/landing/skills/Skills'
import Intro from 'components/landing/Intro'
import RecentProjects from 'components/landing/RecentProjects'




export default function Home() {
  return (
	<PageLayout title='PrachTech'>

			<Intro />
			
			<Skills />

			<RecentProjects />
			
			


			


    </PageLayout>
  )
}
