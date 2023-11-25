import { opinionDetailListData } from 'src/dummyData';

import Text from '@/components/common/Text';
import OpinionItem from '@/components/domain/Opinion/OpinionItem';
import { OpinionDetailInfoType } from '@/constants/types/OpinionTypes';

import * as styles from './OpinionListTemplate.style';

const OpinionListTemplate = () => (
  <styles.Wrapper>
    <Text fontStyleName="subtitle2B" className="title">
      시민들이 제안한 문화 콘텐츠
    </Text>
    <Text fontStyleName="body2R">
      투표 기간 끝나서 완료되었던 것들 여기에 몰아넣을거에요
    </Text>
    <styles.ListWrap>
      {opinionDetailListData.map((info: OpinionDetailInfoType) => (
        <OpinionItem key={info.id} status="finished" info={info} />
      ))}
    </styles.ListWrap>
  </styles.Wrapper>
);

export default OpinionListTemplate;
