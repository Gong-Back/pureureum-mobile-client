import { useInfiniteQuery } from '@tanstack/react-query';

import { OpinionRepository } from '@/apis/opinion';
import QUERY_KEY from '@/constants/apis/queryKey';
import type {
  ApiError,
  OpinionReqParams,
  OpinionResponses,
} from '@/constants/types';
import useSuspendedQuery from '@/hooks/useSuspensedQuery';

/**
 * 생성된 제안 글 목록을 조회하는 Query Hook useGetOpinionList
 * @param param.size 한번의 요청에서 가져올 목록 수량
 * @param param.status 조회할 제안 글 상태 (투표 중, 투표 완료)
 * @param param.sortType 조회된 제안 글 정렬 기준 (최신 순, 투표 많은 순, 투표 적은 순)
 * @returns 투표 글 목록
 */
export const useGetOpinionList = ({
  size,
  status,
  sortType,
}: Omit<OpinionReqParams['list'], 'lastId'>) =>
  useInfiniteQuery<
    OpinionResponses['list'],
    ApiError,
    OpinionResponses['list']
  >({
    queryFn: ({ pageParam: lastId }) =>
      OpinionRepository.getOpinionListAsync({ size, lastId, sortType, status }),
    queryKey: [...QUERY_KEY.OPINION.base, { status }],
    getNextPageParam: (lastPage) =>
      lastPage.hasNext ? lastPage.lastId : undefined,
    getPreviousPageParam: (firstPage) => firstPage?.lastId,
    staleTime: 60 * 1000,
  });

/**
 * 생성된 제안 글의 ID 를 기반으로 상세 정보를 조회하는 Query Hook useGetOpinionDetail
 * @param suggestionId 제안 게시글 ID
 * @returns 투표 글 상세 정보
 */
export const useGetOpinionDetail = (suggestionId: number) =>
  useSuspendedQuery<
    OpinionResponses['detail'],
    ApiError,
    OpinionResponses['detail']
  >({
    queryFn: () => OpinionRepository.getOpinionDetailAsync({ suggestionId }),
    queryKey: QUERY_KEY.OPINION.detail(suggestionId),
    staleTime: 60 * 1000,
  });
