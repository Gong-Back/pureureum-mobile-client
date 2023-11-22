import { useRouter } from 'next/router';

import OpinionDetailTemplate from '@/components/template/OpinionDetailTemplate';
import OpinionVoteTemplate from '@/components/template/OpinionVoteTemplate';

/**
 * 시민이 생성한 `제안` 게시물 상세 페이지
 * - 만약 현재 투표 중인 상태라면 -> OpinionVoteTemplate
 * - 투표 기간이 끝나고 결과를 보여줘야하는 상태라면 -> OpinionDetailTemplate
 * */
const OpinionDetail = () => {
  const router = useRouter();
  const { status, oid } = router.query;

  const opinionStatus = status as 'vote' | 'finished';
  const opinionId = Number(oid);

  return opinionStatus === 'vote' ? (
    <OpinionVoteTemplate />
  ) : (
    <OpinionDetailTemplate />
  );
};

export default OpinionDetail;
