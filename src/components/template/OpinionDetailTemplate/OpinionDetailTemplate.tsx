import Image from 'next/image';
import { useRouter } from 'next/router';

import Button from '@/components/common/Button';
import Text from '@/components/common/Text';
import { COLORS } from '@/constants/styles';

import * as style from './OpinionDetailTemplate.style';

const OpinionDetailTemplate = () => {
  const router = useRouter();
  const opinionId = Number(router.query.oid);

  return <style.Wrapper>투표 기간 종료된 시민 제안. 투표 결과</style.Wrapper>;
};

export default OpinionDetailTemplate;
