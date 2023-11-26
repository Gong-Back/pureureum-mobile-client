import { useRouter } from 'next/router';

import Button from '@/components/common/Button';
import Text from '@/components/common/Text';
import OpinionList from '@/components/domain/Opinion/OpinionList';

import * as styles from './OpinionListTemplate.style';

const OpinionListTemplate = () => {
  const router = useRouter();

  return (
    <>
      <styles.Wrapper>
        <Text fontStyleName="subtitle2B" className="title">
          시민들이 제안한 문화 콘텐츠
        </Text>
        <Text fontStyleName="body2R">
          투표 기간 끝나서 완료되었던 것들 여기에 몰아넣을거에요
        </Text>
        <OpinionList status="FINISHED" />
      </styles.Wrapper>
      <styles.BottomWrap>
        <Button
          onClick={() => router.push('/opinion/new')}
          className="submit"
          sizeType="large"
          isFilled
          isRound
        >
          컨텐츠 제안하기
        </Button>
      </styles.BottomWrap>
    </>
  );
};

export default OpinionListTemplate;
