import { UserRepository } from '@/apis/user';
import QUERY_KEY from '@/constants/apis/queryKey';
import type { ApiError, UserResponses } from '@/constants/types';
import useSuspendedQuery from '@/hooks/useSuspensedQuery';

export const useGetUserProfile = () =>
  useSuspendedQuery<UserResponses['info'], ApiError, UserResponses['info']>({
    queryFn: UserRepository.getUserInfoAsync,
    queryKey: QUERY_KEY.USER.base,
    staleTime: Infinity,
    cacheTime: Infinity,
  });

export const useGetUserCitizenInfo = () =>
  useSuspendedQuery<
    UserResponses['citizen'],
    ApiError,
    UserResponses['citizen']
  >({
    queryFn: UserRepository.getUserCitizenInfoAsync,
    queryKey: QUERY_KEY.USER.citizen(),
    staleTime: Infinity,
    cacheTime: Infinity,
  });

export const useGetUserBadges = () =>
  useSuspendedQuery<UserResponses['badge'], ApiError, UserResponses['badge']>({
    queryFn: UserRepository.getUserBadgesInfoAsync,
    queryKey: QUERY_KEY.USER.badge(),
    staleTime: Infinity,
    cacheTime: Infinity,
  });

export const useGetUserActivities = () =>
  useSuspendedQuery<
    UserResponses['activity'],
    ApiError,
    UserResponses['activity']
  >({
    queryFn: UserRepository.getUserActivityAsync,
    queryKey: QUERY_KEY.USER.badge(),
    staleTime: Infinity,
    cacheTime: Infinity,
  });
