import { useMutation, useQueryClient } from '@tanstack/react-query';

import { OpinionRepository } from '@/apis/opinion';
import QUERY_KEY from '@/constants/apis/queryKey';
import type { ApiError, OpinionReqParams } from '@/constants/types';

/**
 * 투표 제안글을 생성하는 함수 usePostCreateOpinion
 */
export function usePostCreateOpinion() {
  const queryClient = useQueryClient();
  return useMutation<void, ApiError, OpinionReqParams['create']>({
    mutationFn: ({ title, content, thumbnail, suggestionVotes }) =>
      OpinionRepository.postCreateOpinionAsync({
        title,
        content,
        thumbnail,
        suggestionVotes,
      }),
    mutationKey: QUERY_KEY.OPINION.base,
    onSuccess: () => {
      queryClient.invalidateQueries(QUERY_KEY.OPINION.base);
    },
  });
}

/**
 * 특정 항목에 투표를 진행하는 Query Hook usePostVoteOpinion
 * @param param.suggestionId 제안 글 ID
 * @param param.suggestionVoteId 취소할 제안 항목 ID
 */
export function usePostVoteOpinion({
  suggestionId,
  suggestionVoteId,
}: OpinionReqParams['voted']) {
  const queryClient = useQueryClient();
  return useMutation<void, ApiError, OpinionReqParams['voted']>({
    mutationFn: () =>
      OpinionRepository.postVoteOpinionAsync({
        suggestionId,
        suggestionVoteId,
      }),
    mutationKey: QUERY_KEY.OPINION.detail(suggestionId),
    onSuccess: () => {
      queryClient.invalidateQueries(QUERY_KEY.OPINION.detail(suggestionId));
    },
  });
}

/**
 * 투표했던 항목을 취소시키는 Query Hook useDeleteRevertOpinion
 * @param param.suggestionId 제안 글 ID
 * @param param.suggestionVoteId 취소할 제안 항목 ID
 */
export function useDeleteRevertOpinion({
  suggestionId,
  suggestionVoteId,
}: OpinionReqParams['reverted']) {
  const queryClient = useQueryClient();
  return useMutation<void, ApiError, OpinionReqParams['reverted']>({
    mutationFn: () =>
      OpinionRepository.deleteRevertVoteAsync({
        suggestionId,
        suggestionVoteId,
      }),
    mutationKey: QUERY_KEY.OPINION.detail(suggestionId),
    onSuccess: () => {
      queryClient.invalidateQueries(QUERY_KEY.OPINION.detail(suggestionId));
    },
  });
}
