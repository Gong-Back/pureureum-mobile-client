import { useInfiniteQuery } from '@tanstack/react-query';

import { ContentRepository } from '@/apis/content';
import QUERY_KEY from '@/constants/apis/queryKey';
import {
  ApiError,
  CultureEventReqParams,
  CultureEventResponses,
} from '@/constants/types';

export const useGetCultureEventList = ({
  size,
  sortType,
}: Omit<CultureEventReqParams, 'lastId'>) =>
  useInfiniteQuery<CultureEventResponses, ApiError, CultureEventResponses>({
    queryKey: QUERY_KEY.CULTURE_EVENTS.base,
    queryFn: ({ pageParam }) =>
      ContentRepository.getCultureEventListAsync({
        size,
        sortType,
        lastId: pageParam?.lastId,
        lastDateTime: pageParam?.lastDateTime,
      }),
    getNextPageParam: (lastPage) => {
      if (lastPage.hasNext) {
        return {
          lastId: lastPage.lastId,
          lastDateTime: lastPage.lastDateTime,
        };
      }
      return undefined;
    },
  });
