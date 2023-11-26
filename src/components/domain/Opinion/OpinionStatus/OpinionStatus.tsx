import { useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/router';
import { useState } from 'react';

import dayjs from 'dayjs';

import CheckedIconSvg from '@/assets/icons/checkedBoxIcon.svg';
import NonCheckedIconSvg from '@/assets/icons/nonCheckedBoxIcon.svg';
import SmileNewsIconSvg from '@/assets/icons/smileNews.svg';
import Button from '@/components/common/Button';
import Text from '@/components/common/Text';
import QUERY_KEY from '@/constants/apis/queryKey';
import { COLORS } from '@/constants/styles';
import { OpinionOptionType, OpinionStatusType } from '@/constants/types';
import {
  useDeleteRevertOpinion,
  usePostVoteOpinion,
} from '@/query-hooks/opinion/mutation';
import FormatUtil from '@/utils/format';

import * as style from './OpinionStatus.style';

interface OpinionItemProps {
  title: string;
  endDate: string;
  suggestionVotes: OpinionOptionType[];
  totalVoteCount: number;
  isVoted: boolean;
  votedId?: number;
}

// 투표 중 혹은 투표 종료된 시민 의견 아이템
const OpinionStatus = ({
  title,
  endDate,
  suggestionVotes,
  totalVoteCount,
  isVoted,
  votedId,
}: OpinionItemProps) => {
  const router = useRouter();
  const suggestionId = Number(router.query.oid);
  const queryClient = useQueryClient();

  const status: OpinionStatusType = dayjs().isAfter(endDate)
    ? 'FINISHED'
    : 'IN_PROGRESS';

  const [selectedVoteId, setSelectedVoteId] = useState<number | undefined>(
    votedId,
  );

  const { mutateAsync: postVoteOpinion } = usePostVoteOpinion(suggestionId);
  const { mutateAsync: revertVoteOpinion } =
    useDeleteRevertOpinion(suggestionId);

  const isFinished = status === 'FINISHED';
  const [{ id: mostVotedOpinionId }] = suggestionVotes.toSorted(
    (a, b) => b.voteCount - a.voteCount,
  );

  const submitVoteOption = async () => {
    if (votedId && votedId !== selectedVoteId) await revertVoteOpinion(votedId);
    if (selectedVoteId) await postVoteOpinion(selectedVoteId);
    queryClient.invalidateQueries(QUERY_KEY.OPINION.detail(suggestionId));
  };

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
            <Text
              fontStyleName={
                isFinished && suggestionVoteId === mostVotedOpinionId
                  ? 'body2B'
                  : 'body2R'
              }
              color={COLORS.grayscale.gray700}
            >
              {content}
            </Text>
            {isFinished && (
              <Text
                className="result"
                fontStyleName={
                  isFinished && suggestionVoteId === mostVotedOpinionId
                    ? 'body2B'
                    : 'body2R'
                }
                color={COLORS.grayscale.gray700}
              >
                {FormatUtil.formatPercentage(totalVoteCount, voteCount)}
              </Text>
            )}
          </style.Opinion>
        ))}
      </style.OpinionWrap>
      <Button
        className="submit"
        themeColor={
          isFinished ? COLORS.grayscale.gray400 : COLORS.primary.default
        }
        disabled={isFinished}
        onClick={submitVoteOption}
        isFilled
        isRound
      >
        {isFinished ? '종료된 투표입니다' : '투표 하기'}
      </Button>
    </style.Wrapper>
  );
};

export default OpinionStatus;
