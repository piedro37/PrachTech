import Intro from 'components/landing/Intro';
import RecentProjects from 'components/landing/RecentProjects';
import Skills from 'components/landing/skills/Skills';
import PageLayout from '../components/general/PageLayout';

export default function Home() {
  return (
    <PageLayout title='PrachTech'>
      <Intro />
      <Skills />
      <RecentProjects />
    </PageLayout>
  );
}
