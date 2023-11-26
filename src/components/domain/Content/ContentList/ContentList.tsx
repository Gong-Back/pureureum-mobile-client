import { CultureEventInfoType } from '@/constants/types';
import useIntersectionObserver from '@/hooks/useIntersectionObserver';
import { useGetCultureEventList } from '@/query-hooks/content';

import ContentItem from '../ContentItem';
import * as styles from './ContentList.style';

const ContentList = () => {
  const {
    data: contentDataList,
    fetchNextPage: fetchNextContentList,
    hasNextPage,
  } = useGetCultureEventList({
    size: 10,
    sortType: 'REGISTER_OLDEST',
  });

  const handleFetchNextContent = (entries: IntersectionObserverEntry[]) => {
    if (hasNextPage && entries[0].isIntersecting) fetchNextContentList();
  };

  const { targetRef } = useIntersectionObserver({
    onIntersect: handleFetchNextContent,
  });

  const contentList =
    contentDataList?.pages
      .reduce<CultureEventInfoType[]>(
        (previous, { content: currentContents }) => [
          ...previous,
          ...currentContents,
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
      {contentList.map((info) => (
        <ContentItem key={info.id} id={info.id} info={info} />
      ))}
    </styles.Wrapper>
  );
};

export default ContentList;
