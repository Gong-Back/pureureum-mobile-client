import { useState } from 'react';

import Text from '@/components/common/Text';
import ToggleButton from '@/components/common/ToggleButton';
import { CultureEventInfoType } from '@/constants/types';
import { useGetUserActivities } from '@/query-hooks/user';

import ContentItem from '../../Content/ContentItem';
import OpinionItem from '../../Opinion/OpinionItem';
import * as styles from './ActivitySection.style';

const ActivitySection = () => {
  // const [mode, setMode] = useState<'content' | 'opinion'>('content');
  const isContentMode = true;
  // const onChangeMode = () =>
  //  setMode((prev) => (prev === 'content' ? 'opinion' : 'content'));

  const { data: activityInfo } = useGetUserActivities();
  const { culturalEventDtos: contentList } = activityInfo;

  return (
    <styles.Wrapper>
      {/* <ToggleButton isLeft={isContentMode} onClick={onChangeMode} /> */}
      <Text fontStyleName="subtitle2R" className="title">
        {isContentMode ? '내가 참여한 문화 컨텐츠' : '내가 제안한 아이디어'}
      </Text>
      <styles.ListWrap>
        {contentList.map((info: CultureEventInfoType) => (
          <ContentItem key={info.id} id={info.id} info={info} />
        ))}
      </styles.ListWrap>
    </styles.Wrapper>
  );
};

export default ActivitySection;
