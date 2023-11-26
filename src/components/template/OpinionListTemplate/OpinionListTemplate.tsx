import Text from '@/components/common/Text';
import OpinionItem from '@/components/domain/Opinion/OpinionItem';
import type { OpinionType } from '@/constants/types';
import { useGetOpinionList } from '@/query-hooks/opinion';

import * as styles from './OpinionListTemplate.style';

const OpinionListTemplate = () => {
  const { data: opinionDataList } = useGetOpinionList({
    size: 10,
    status: 'FINISHED',
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
      <styles.ListWrap>
        {opinionList.map((opinion) => (
          <OpinionItem
            key={opinion.id}
            id={opinion.id}
            title={opinion.title}
            thumbnail={opinion.thumbnail}
            startDate={opinion.startDate}
            endDate={opinion.endDate}
          />
        ))}
        {/* {dummyOpinionDetailData.map((info) => (
          <OpinionItem key={info.} status="finished" info={info} />
        ))} */}
      </styles.ListWrap>
    </styles.Wrapper>
  );
};

export default OpinionListTemplate;
