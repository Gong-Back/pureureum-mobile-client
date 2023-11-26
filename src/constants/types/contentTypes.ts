/**
 * 성동구에서 제공하는 문화 행사 상세 정보 Type
 *
 * id 문화 콘텐츠 id
 * culturalEventId 공공데이터포털 문화행사 id
 * title 제목
 * category 분류명
 * state 컨텐츠 상태
 * description 내용
 * paymentMethod 결제방법
 * target 컨텐츠 대상
 * serviceUrl 바로가기 URL
 * placeName 장소 이름
 * latitude 장소 위도
 * longitude 장소 경도
 * serviceStartDateTime 컨텐츠 시작 시간
 * serviceEndDateTime 컨텐츠 종료 시간
 * registerStartDateTime 접수 시작 시간
 * registerEndDateTime 접수 종료 시간
 */
export interface CultureEventInfoType {
  id: number;
  culturalEventId: string;
  clasName: string;
  region: string;
  state: string;
  content: string;
  paymentMethod: string;
  placeName: string;
  target: string;
  serviceUrl: string;
  latitude: string;
  longitude: string;
  serviceStartDateTime: Date;
  serviceEndDateTime: Date;
  registerStartDateTime: Date;
  registerEndDateTime: Date;
  thumbnailUrl: string;
}

type SortType =
  | 'SERVICE_LATEST' // 서비스 개시 최신순
  | 'SERVICE_OLDEST' // 서비스 개시 오래된 순
  | 'REGISTER_LATEST' // 접수 개시 최신순
  | 'REGISTER_OLDEST'; // 접수 개시 오래된 순

/** 성동구 문화 컨텐츠 관련 API 요청 타입 */
export type CultureEventReqParams = {
  size?: number;
  lastId?: number;
  lastDateTime?: Date;
  sortType?: SortType;
};

/** 성동구 문화 컨텐츠 관련 API 응답 타입 */
export type CultureEventResponses = {
  hasNext: boolean;
  content: CultureEventInfoType[];
};
