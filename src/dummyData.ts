import { UserResponses } from '@/constants/types';

import { CultureContentInfoType } from './constants/types/CultureContentTypes';
import {
  OpinionDetailInfoType,
  OpinionVoteInfoType,
} from './constants/types/OpinionTypes';

// 마이페이지 접속 시
export const profileDummyData: UserResponses['info'] = {
  email: 'gwangin1999@naver.com',
  name: '백광인',
  nickname: 'RookieAND',
  gender: 'MALE',
  birthday: '1999-01-26',
  profileUrl: '',
};

// 성동구 문화 컨텐츠
export const cultureContentData = {
  title: '12월 유아가족교육 <청계천에서 들려주는 자연생태동화> 모집 안내',
  thumbnail:
    'https://yeyak.seoul.go.kr/cmsdata/web_upload/svc/20231117/1700198515307MQ6Z5DV1OYB19K17R4S6EG1EH.png',
  category: '교육/강좌',
  state: '접수중',
  description: '국악노래 배우기 컨텐츠에 대한 상세 설명입니다',
  paymentMethod: '무료',
  placeName: '청계천박물관(성동구)',
  target: '가족(6~8세 및 동반가족_20가족)',
  serviceUrl:
    'https://yeyak.seoul.go.kr/web/reservation/selectReservView.do?rsv_svc_id=S231117142107676002',
  latitude: '127.0350413529804',
  longitude: '37.571266444339074',
  serviceStartDateTime: new Date('2023-11-20 00:00:00'),
  serviceEndDateTime: new Date('2023-12-08 00:00:00'),
  registerStartDateTime: new Date('2023-09-01 09:00:00'),
  registerEndDateTime: new Date('2023-11-29 17:00:00'),
};

export const cultureContentListData: CultureContentInfoType[] = Array(6)
  .fill(0)
  .map((_, i) => ({
    ...cultureContentData,
    id: i + 1,
    culturalEventId: i + 1,
  }));

// 시민 제안
export const opinionVoteData: Omit<OpinionVoteInfoType, 'id'> = {
  status: 'vote',
  title: '다양한 세대가 함께하는 애니메이션 모음전을 진행하는 건 어떨까요?',
  thumbnail: '/sample.png',
  description:
    '10대부터 20대, 30대까지 다양한 연령대의 사람들이 모두 즐길 수 있도록, 추억의 애니메이션에 함께 빠져보실 분 있나요? 10대부터 20대, 30대까지 다양한 연령대의 사람들이 모두 즐길 수 있도록, 추억의 애니메이션에 함께 빠져보실 분 있나요?',
  voteStartDate: new Date('2023-11-03'),
  voteEndDate: new Date('2023-11-06'),
  voteData: '',
};

export const opinionVoteListData: OpinionVoteInfoType[] = Array(6)
  .fill(0)
  .map((_, i) => ({ ...opinionVoteData, id: i + 1 }));

export const opinionDetailData: Omit<OpinionDetailInfoType, 'id'> = {
  status: 'finished',
  title: '다양한 세대가 함께하는 애니메이션 모음전을 진행하는 건 어떨까요?',
  thumbnail: '/sample.png',
  description:
    '10대부터 20대, 30대까지 다양한 연령대의 사람들이 모두 즐길 수 있도록, 추억의 애니메이션에 함께 빠져보실 분 있나요? 10대부터 20대, 30대까지 다양한 연령대의 사람들이 모두 즐길 수 있도록, 추억의 애니메이션에 함께 빠져보실 분 있나요?',
  voteStartDate: new Date('2023-11-03'),
  voteEndDate: new Date('2023-11-06'),
  contentData: '',
};

export const opinionDetailListData: OpinionDetailInfoType[] = Array(6)
  .fill(0)
  .map((_, i) => ({ ...opinionDetailData, id: i + 1 }));
