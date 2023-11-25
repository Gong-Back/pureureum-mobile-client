import {
  OpinionReqParams,
  OpinionResponses,
} from '@/constants/types/OpinionTypes';

import { getAsync, postAsync } from './API';

export class OpinionRepository {
  /**
   * 현재 투표 중인 제안 목록 데이터를 조회하는 함수 getOpinionVoteDataAsync
   * @param
   * @returns
   */
  static async getOpinionVoteDataAsync(params: OpinionReqParams['vote']) {
    const response = await getAsync<OpinionResponses['vote']>(`/`, {});
    return response.data;
  }

  /**
   * 투표 종료 후 투표 결과를 담은 제안 목록 데이터 조회하는 함수 getOpinionDetailDataAsync
   * @param
   * @returns
   */
  static async getOpinionDetailDataAsync(params: OpinionReqParams['finished']) {
    const response = await getAsync<OpinionResponses['finished']>(`/`, {});
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
  static async registerOpinionAsync({
    title,
    description,
    opinions,
    thumbnail,
  }: OpinionReqParams['new']) {
    const formData = new FormData();
    formData.append(
      'projectRegisterReq',
      new Blob(
        [
          JSON.stringify({
            title,
            description,
            opinions,
          }),
        ],
        { type: 'application/json' },
      ),
      'projectRegisterReq',
    );

    const response = await postAsync<unknown, OpinionReqParams['new']>(
      `/`,
      {
        title,
        description,
        opinions,
        thumbnail,
      },
      {
        headers: {
          requireToken: true,
        },
      },
    );
    return response.data;
  }

  /**
   * 제안에 투표하는 함수 voteOpinionAsync
   * @param
   * @returns
   */
  static async voteOpinionAsync() {
    const response = await postAsync<void, undefined>(`/`, undefined, {
      headers: {
        requireToken: true,
      },
    });
    return response.data;
  }
}
