import { useState } from 'react';

import Text from '@/components/common/Text';
import ToggleButton from '@/components/common/ToggleButton';
import ContentList from '@/components/domain/Content/ContentList';
import OpinionList from '@/components/domain/Opinion/OpinionList';

import * as styles from './HomeTemplate.style';

const HomeTemplate = () => {
  const [mode, setMode] = useState<'content' | 'opinion'>('content');
  const isContentMode = mode === 'content';
  const onChangeMode = () =>
    setMode((prev) => (prev === 'content' ? 'opinion' : 'content'));

  return (
    <styles.Wrapper>
      <ToggleButton isLeft={isContentMode} onClick={onChangeMode} />
      <Text fontStyleName="subtitle2R" className="title">
        {isContentMode ? '성동이' : '우리가'} <span>만들어가는 </span>
        {isContentMode ? '우리' : '성동'}
      </Text>
      <Text fontStyleName="body2R">
        {isContentMode
          ? '다양한 성동구 문화 콘텐츠를 구경하고 자유롭게 참여해보세요!'
          : '성동구에서 진행하면 좋을 것 같은 문화 콘텐츠 아이디어를 자유롭게 제안하고 투표해주세요!'}
      </Text>
      <styles.ListWrap display={isContentMode}>
        <ContentList sortType="REGISTER_LATEST" />
      </styles.ListWrap>
      <styles.ListWrap display={!isContentMode}>
        <OpinionList status="IN_PROGRESS" />
      </styles.ListWrap>
    </styles.Wrapper>
  );
};

export default HomeTemplate;
