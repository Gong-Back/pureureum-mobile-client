import {
  OpinionReqParams,
  OpinionResponses,
} from '@/constants/types/OpinionTypes';

import { deleteAsync, getAsync, postAsync } from './API';

export class OpinionRepository {
  /**
   * 현재 투표 중인 제안 목록 데이터를 조회하는 함수 getOpinionVoteDataAsync
   * @param
   * @returns
   */
  static async getOpinionListAsync({
    size,
    lastId,
    sortType,
    status,
  }: OpinionReqParams['list']) {
    const response = await getAsync<OpinionResponses['list']>(`/suggestions`, {
      params: {
        size,
        lastId,
        sortType,
        status,
      },
    });
    return response.data;
  }

  /**
   * 투표 종료 후 투표 결과를 담은 제안 목록 데이터 조회하는 함수 getOpinionDetailDataAsync
   * @param
   * @returns
   */
  static async getOpinionDetailAsync({
    suggestionId,
  }: OpinionReqParams['detail']) {
    const response = await getAsync<OpinionResponses['detail']>(
      `/suggestions/${suggestionId}`,
      {},
    );
    return response.data;
  }

  /**
   * 새로운 제안을 생성하는 함수 registerOpinionAsync
   * @param param.title 제안 게시글 제목
   * @param param.description 제안 게시글 설명
   * @param param.opinion 제안 옵션 목록
   * @param param.thumbnail 제안 게시글 섬네일 파일
   * @returns
   */
  static async postCreateOpinionAsync({
    title,
    content,
    suggestionVotes,
    thumbnail,
  }: OpinionReqParams['create']) {
    const formData = new FormData();
    formData.append('thumbnail', thumbnail);
    formData.append(
      'suggestionRequest',
      new Blob(
        [
          JSON.stringify({
            title,
            content,
            suggestionVotes: suggestionVotes.map((suggestion) => ({
              content: suggestion,
            })),
          }),
        ],
        { type: 'application/json' },
      ),
    );

    await postAsync<unknown, FormData>(`/suggestions`, formData, {
      headers: {
        requireToken: true,
      },
    });
  }

  /**
   * 사용자가 선택한 제안에 투표를 진행하는 함수 postVoteOpinionAsync
   * @param param.suggestionId
   * @param param.suggestionVoteId
   */
  static async postVoteOpinionAsync({
    suggestionId,
    suggestionVoteId,
  }: OpinionReqParams['voted']) {
    await postAsync<void, undefined>(
      `/suggestions/${suggestionId}/${suggestionVoteId}/votes`,
      undefined,
      {
        headers: {
          requireToken: true,
        },
      },
    );
  }

  /**
   * 사용자가 제안한 투표를 다시 취소하는 함수 deleteRevertVoteAsync
   * @param param.suggestionId
   * @param param.suggestionVoteId
   */
  static async deleteRevertVoteAsync({
    suggestionId,
    suggestionVoteId,
  }: OpinionReqParams['reverted']) {
    await deleteAsync<undefined>(
      `/suggestions/${suggestionId}/${suggestionVoteId}`,
      {
        headers: {
          requireToken: true,
        },
      },
    );
  }
}
