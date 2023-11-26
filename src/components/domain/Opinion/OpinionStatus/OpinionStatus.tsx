import Image from 'next/image';
import { useRouter } from 'next/router';
import { useState } from 'react';

import dayjs from 'dayjs';

import CheckedIconSvg from '@/assets/icons/checkedBoxIcon.svg';
import NonCheckedIconSvg from '@/assets/icons/nonCheckedBoxIcon.svg';
import SmileNewsIconSvg from '@/assets/icons/smileNews.svg';
import Button from '@/components/common/Button';
import Text from '@/components/common/Text';
import { COLORS } from '@/constants/styles';
import { OpinionOptionType, OpinionStatusType } from '@/constants/types';
import {
  useDeleteRevertOpinion,
  usePostVoteOpinion,
} from '@/query-hooks/opinion/mutation';

import * as style from './OpinionStatus.style';

interface OpinionItemProps {
  title: string;
  endDate: string;
  suggestionVotes: OpinionOptionType[];
  isVoted: boolean;
  votedId?: number;
}

// 투표 중 혹은 투표 종료된 시민 의견 아이템
const OpinionStatus = ({
  title,
  endDate,
  suggestionVotes,
  isVoted,
  votedId,
}: OpinionItemProps) => {
  const router = useRouter();
  const suggestionId = Number(router.query.oid);

  const status: OpinionStatusType = dayjs().isAfter(endDate)
    ? 'FINISHED'
    : 'IN_PROGRESS';

  const [selectedVoteId, setSelectedVoteId] = useState<number | undefined>(
    votedId,
  );

  const { mutateAsync: postVoteOpinion } = usePostVoteOpinion(suggestionId);
  const { mutateAsync: revertVoteOpinion } =
    useDeleteRevertOpinion(suggestionId);

  const submitVoteOption = async () => {
    if (votedId && votedId !== selectedVoteId) await revertVoteOpinion(votedId);
    if (selectedVoteId) await postVoteOpinion(selectedVoteId);
  };

  console.log({ selectedVoteId, isVoted, votedId, suggestionVotes });

  return (
    <style.Wrapper>
      <style.Title>
        <SmileNewsIconSvg className="icon" width={24} height={24} />
        <Text fontStyleName="body1B" color={COLORS.primary.default}>
          {title}
        </Text>
      </style.Title>
      <style.OpinionWrap>
        {suggestionVotes.map(({ id: suggestionVoteId, content, voteCount }) => (
          <style.Opinion>
            {suggestionVoteId === selectedVoteId ? (
              <CheckedIconSvg
                onClick={() => setSelectedVoteId(undefined)}
                color={COLORS.grayscale.gray700}
              />
            ) : (
              <NonCheckedIconSvg
                onClick={() => setSelectedVoteId(suggestionVoteId)}
                color={COLORS.grayscale.gray500}
              />
            )}
            <Text fontStyleName="body2R" color={COLORS.grayscale.gray700}>
              {content}
            </Text>
          </style.Opinion>
        ))}
      </style.OpinionWrap>
      <Button
        className="submit"
        disabled={status === 'FINISHED'}
        onClick={submitVoteOption}
        isFilled
        isRound
      >
        투표 하기
      </Button>
    </style.Wrapper>
  );
};

export default OpinionStatus;
