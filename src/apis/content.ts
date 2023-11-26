import {
  CultureEventReqParams,
  CultureEventResponses,
} from '@/constants/types';

import { getAsync } from './API';

export class ContentRepository {
  /**
   * 성동구에서 제공하는 문화 콘텐츠 데이터를 조회하는 함수 getCultureEventListAsync
   */
  static async getCultureEventListAsync({
    size,
    lastId,
    lastDateTime,
    sortType,
  }: CultureEventReqParams) {
    const response = await getAsync<CultureEventResponses>(`/cultural-events`, {
      params: { size, lastId, lastDateTime, sortType },
    });
    return response;
  }
}
