import { OpinionStatusType, OpinionType } from '@/constants/types';
import useIntersectionObserver from '@/hooks/useIntersectionObserver';
import { useGetOpinionList } from '@/query-hooks/opinion';

import OpinionItem from '../OpinionItem';
import * as styles from './OpinionList.style';

interface OpinionListProps {
  status: OpinionStatusType;
}

const OpinionList = ({ status }: OpinionListProps) => {
  const {
    data: opinionDataList,
    fetchNextPage: fetchNextOpinionList,
    hasNextPage,
  } = useGetOpinionList({
    size: 10,
    status,
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
    <styles.Wrapper
      ref={(element: HTMLDivElement) => {
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
    </styles.Wrapper>
  );
};

export default OpinionList;
