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
export interface CultureContentInfoType {
  id: number;
  culturalEventId: number;
  title: string;
  thumbnail: string;
  category: string;
  state: string;
  description: string;
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
}

/** 성동구 문화 컨텐츠 관련 API 요청 타입 */
export type CultureContentReqParams = {};

/** 성동구 문화 컨텐츠 관련 API 응답 타입 */
export type CultureContentResponses = CultureContentInfoType[];
