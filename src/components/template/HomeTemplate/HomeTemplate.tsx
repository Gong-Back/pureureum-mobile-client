import ContentItem from '@/components/domain/Content/ContentItem';
import OpinionItem from '@/components/domain/Opinion/OpinionItem';

import * as styles from './HomeTemplate.style';

const HomeTemplate = () => (
  <styles.Wrapper>
    <h3>성동 컨텐츠</h3>
    <ContentItem thumbnail="/sample.jpg" info={{}} />
    <h3>투표 중인 시민 제안</h3>
    <OpinionItem status="vote" thumbnail="/sample.jpg" info={{}} />
    <OpinionItem status="vote" thumbnail="/sample.jpg" info={{}} />
    <OpinionItem status="vote" thumbnail="/sample.jpg" info={{}} />
  </styles.Wrapper>
);

export default HomeTemplate;
