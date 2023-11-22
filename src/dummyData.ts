import { UserResponses } from '@/constants/types';

// 마이페이지 접속 시
export const profileDummyData: UserResponses['info'] = {
  email: 'gwangin1999@naver.com',
  name: '백광인',
  nickname: 'RookieAND',
  gender: 'MALE',
  birthday: '1999-01-26',
  profileUrl: '',
};

// 성동구 컨텐츠
export const contentData = {
  title: '국악노래(창) 배우기',
  thumbnail: '/sample.jpg',
  type: '교육 강좌',
  startDate: '2023-11-03',
  endDate: '2023-11-06',
  recruitStartDate: '2023-11-03',
  recruitEndDate: '2023-11-06',
};

export const contentsData = Array(6)
  .fill(0)
  .map((_, i) => ({ ...contentData, id: i + 1 }));

// 시민 제안
export const opinionData = {
  status: 'vote',
  title: '다양한 세대가 함께하는 애니메이션 모음전',
  thumbnail: '/sample.jpg',
  voteStartDate: '2023-11-03',
  voteEndDate: '2023-11-06',
};

export const opinionsData = Array(6)
  .fill(0)
  .map((_, i) => ({ ...opinionData, id: i + 1 }));

// 제안 리스트 조회 시
// export const opinionData: ProjectResponses['main'] = {
//  projectPartInformation: {
//    id: 1,
//    title: '우리 봄에 감자 농장 체험해요!',
//    likeCount: 10,
//    discussionStartDate: '2023-10-27',
//    discussionEndDate: '2023-11-02',
//    projectStartDate: '2023-11-03',
//    projectEndDate: '2023-11-06',
//    recruits: 0,
//    totalRecruits: 10,
//    facilityAddress: {
//      city: '고양시',
//      county: '대화역',
//      district: '어딘가',
//      jibun: '',
//      detail: '',
//      longitude: '',
//      latitude: '',
//    },
//    ownerName: 'owner',
//  },
//  projectCategory: 'FARMING_HEALING',
//  thumbnailFileRes: {
//    projectFileUrl: '',
//    projectFileType: 'THUMBNAIL',
//  },
// };

// export const opinionsDummydata = Array(6)
//  .fill(0)
//  .map((v, i) => ({ ...opinionData, id: i }));

/// / 제안 상세 데이터 조회 시
// export const opinionContentDummyData: ProjectResponses['detail'] = {
//  projectInformation: {
//    title: '성동구 시민과 함께하는 추억의 애니메이션 모음전',
//    likeCount: 10,
//    discussionStartDate: '2023-10-27',
//    discussionEndDate: '2023-11-02',
//    projectStartDate: '2023-11-03',
//    projectEndDate: '2023-11-06',
//    recruits: 10,
//    totalRecruits: 100,
//    facilityAddress: {
//      city: '고양시',
//      county: '대화역',
//      district: '어딘가',
//      jibun: '',
//      detail: '',
//      longitude: '126.570667',
//      latitude: '33.450701',
//    },
//    introduction:
//      '10대부터 20대, 30대까지 다양한 연령대의 사람들이 모두 즐길 수 있도록, 추억의 애니메이션에 함께 빠져보실 분 있나요?',
//    content: 'content',
//    minAge: -1,
//    maxAge: -1,
//    guide: '',
//    notice: '',
//    ownerName: 'owner',
//  },
//  projectCategory: 'FARMING_HEALING',
//  projectStatus: 'string',
//  projectPayment: '10000원',
//  projectFiles: [
//    { projectFileType: 'THUMBNAIL', projectFileUrl: '' },
//    {
//      projectFileType: 'COMMON',
//      projectFileUrl: '',
//    },
//  ],
// };
