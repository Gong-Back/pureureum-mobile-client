import { useState } from 'react';

import { contentsData, opinionsData } from 'src/dummyData';

import Text from '@/components/common/Text';
import ToggleButton from '@/components/common/ToggleButton';
import ContentItem from '@/components/domain/Content/ContentItem';
import OpinionItem from '@/components/domain/Opinion/OpinionItem';

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

      <styles.ListWrapper>
        {isContentMode
          ? contentsData.map((data) => (
              <ContentItem thumbnail={data.thumbnail} info={data} />
            ))
          : opinionsData.map((data) => (
              <OpinionItem
                status={data.status as 'vote'}
                thumbnail={data.thumbnail}
                info={data}
              />
            ))}
      </styles.ListWrapper>
    </styles.Wrapper>
  );
};

export default HomeTemplate;
