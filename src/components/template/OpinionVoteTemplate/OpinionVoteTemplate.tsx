import Image from 'next/image';
import { useRouter } from 'next/router';

import Button from '@/components/common/Button';
import Text from '@/components/common/Text';
import { COLORS } from '@/constants/styles';

import * as style from './OpinionVoteTemplate.style';

const OpinionVoteTemplate = () => {
  const router = useRouter();
  const opinionId = Number(router.query.oid);

  return <style.Wrapper>투표 중인 시민 제안</style.Wrapper>;
};

export default OpinionVoteTemplate;
