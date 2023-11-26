import { useState } from 'react';

import Text from '@/components/common/Text';
import ToggleButton from '@/components/common/ToggleButton';

import ContentItem from '../../Content/ContentItem';
import OpinionItem from '../../Opinion/OpinionItem';
import * as styles from './ActivitySection.style';

interface ActivitySectionProps {
  contentData?: any;
  opinionData?: any;
}

const ActivitySection = ({
  contentData,
  opinionData,
}: ActivitySectionProps) => {
  const [mode, setMode] = useState<'content' | 'opinion'>('content');
  const isContentMode = mode === 'content';
  const onChangeMode = () =>
    setMode((prev) => (prev === 'content' ? 'opinion' : 'content'));

  return (
    <styles.Wrapper>
      <ToggleButton isLeft={isContentMode} onClick={onChangeMode} />
      <Text fontStyleName="subtitle2R" className="title">
        {isContentMode ? '내가 참여한 문화 컨텐츠' : '내가 제안한 아이디어'}
      </Text>
      <styles.ListWrap>
        {/* {isContentMode
          ? cultureContentListData
              .slice(4)
              .slice()
              .map((info: CultureEventInfoType) => (
                <ContentItem key={info.id} id={info.id} info={info} />
              ))
          : opinionVoteListData
              .slice(4)
              .map((info: OpinionVoteInfoType) => (
                <OpinionItem status={info.status} info={info} />
              ))} */}
      </styles.ListWrap>
    </styles.Wrapper>
  );
};

export default ActivitySection;
