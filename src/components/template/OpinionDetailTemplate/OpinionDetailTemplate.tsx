import Image from 'next/image';
import { useRouter } from 'next/router';

import dayjs from 'dayjs';

import Tag from '@/components/common/Tag';
import Text from '@/components/common/Text';
import OpinionStatus from '@/components/domain/Opinion/OpinionStatus';
import { COLORS } from '@/constants/styles';
import type { OpinionStatusType } from '@/constants/types';
import { useGetOpinionDetail } from '@/query-hooks/opinion';

import * as styles from './OpinionDetailTemplate.style';

const OpinionDetailTemplate = () => {
  const router = useRouter();
  const suggestionId = Number(router.query.oid);

  const { data: opinionDetailData } = useGetOpinionDetail(suggestionId);

  const {
    title,
    thumbnailUrl,
    content,
    endDate,
    totalVoteCount,
    suggestionVotes,
    userVotedInfo,
  } = opinionDetailData;

  const status: OpinionStatusType = dayjs().isAfter(endDate)
    ? 'FINISHED'
    : 'IN_PROGRESS';

  return (
    <styles.Wrapper>
      <Tag label={status === 'FINISHED' ? '투표 완료' : '투표 중'} />
      <Text
        fontStyleName="subtitle1"
        color={COLORS.grayscale.gray700}
        className="title"
      >
        {title}
      </Text>
      <styles.ThumbnailWrap>
        <Image src={thumbnailUrl} layout="fill" />
      </styles.ThumbnailWrap>
      <Text fontStyleName="body1R" color={COLORS.grayscale.gray600}>
        {content}
      </Text>
      <OpinionStatus
        title={title}
        endDate={endDate}
        suggestionVotes={suggestionVotes}
        totalVoteCount={totalVoteCount}
        isVoted={userVotedInfo.isVoted}
        votedId={userVotedInfo?.votedId}
      />
    </styles.Wrapper>
  );
};

export default OpinionDetailTemplate;
