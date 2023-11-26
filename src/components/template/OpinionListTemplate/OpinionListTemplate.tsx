import Text from '@/components/common/Text';
import OpinionItem from '@/components/domain/Opinion/OpinionItem';
import type { OpinionType } from '@/constants/types';
import useIntersectionObserver from '@/hooks/useIntersectionObserver';
import { useGetOpinionList } from '@/query-hooks/opinion';

import * as styles from './OpinionListTemplate.style';

const OpinionListTemplate = () => {
  const {
    data: opinionDataList,
    fetchNextPage: fetchNextOpinionList,
    hasNextPage,
  } = useGetOpinionList({
    size: 10,
    status: 'IN_PROGRESS',
  });

  const handleFetchNextOpinion = (entries: IntersectionObserverEntry[]) => {
    if (hasNextPage && entries[0].isIntersecting) fetchNextOpinionList();
  };

  const { targetRef } = useIntersectionObserver({
    onIntersect: handleFetchNextOpinion,
  });

  const opinionList =
    opinionDataList?.pages
      .reduce<OpinionType[]>(
        (previous, { content: currentOpinions }) => [
          ...previous,
          ...currentOpinions,
        ],
        [],
      )
      .flat() || [];

  return (
    <styles.Wrapper>
      <Text fontStyleName="subtitle2B" className="title">
        시민들이 제안한 문화 콘텐츠
      </Text>
      <Text fontStyleName="body2R">
        투표 기간 끝나서 완료되었던 것들 여기에 몰아넣을거에요
      </Text>
      <styles.ListWrap
        ref={(element) => {
          if (element?.lastElementChild)
            targetRef.current = element.lastElementChild;
        }}
      >
        {opinionList.map((opinion) => (
          <OpinionItem
            key={opinion.id}
            id={opinion.id}
            title={opinion.title}
            thumbnailUrl={opinion.thumbnailUrl}
            endDate={opinion.endDate}
          />
        ))}
      </styles.ListWrap>
    </styles.Wrapper>
  );
};

export default OpinionListTemplate;
