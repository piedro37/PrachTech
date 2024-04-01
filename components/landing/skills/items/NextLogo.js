import { SiNextdotjs } from 'react-icons/si';
import styled from 'styled-components';
import { TSTitle, TSWrapper } from './itemStyles';

const MyNodeLogo = styled(SiNextdotjs)`
  color: ${(props) => props.theme.primary};
`;

export const NextLogo = () => (
  <TSWrapper href='https://nextjs.org/' title='Production grade react.'>
    <MyNodeLogo alt='next-logo' size={60} />
    <TSTitle>Next.js</TSTitle>
  </TSWrapper>
);

export default NextLogo;
