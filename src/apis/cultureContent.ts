import {
  CultureContentReqParams,
  CultureContentResponses,
} from '@/constants/types/CultureContentTypes';

import { getAsync } from './API';

export class ProjectRepository {
  /**
   * 성동구에서 제공하는 문화 콘텐츠 데이터를 조회하는 함수 getCultureContentAsync
   * @param
   * @returns
   */
  static async getCultureContentAsync(params: CultureContentReqParams) {
    const response = await getAsync<CultureContentResponses>(`/`, {});
    return response;
  }
}
