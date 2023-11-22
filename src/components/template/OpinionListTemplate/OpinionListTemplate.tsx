import OpinionItem from '@/components/domain/Opinion/OpinionItem';

import * as styles from './OpinionListTemplate.style';

const OpinionTemplate = () => (
  <styles.Wrapper>
    <h1>투표 종료된 제안 게시물 목록</h1>
    <OpinionItem status="finished" thumbnail="/sample.jpg" info={{}} />
    <OpinionItem status="finished" thumbnail="/sample.jpg" info={{}} />
  </styles.Wrapper>
);

export default OpinionTemplate;
