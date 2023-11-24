export type OpinionStatusType = 'vote' | 'finished';

interface CommonInfo {
  id: number;
  status: OpinionStatusType;
  title: string;
  thumbnail: string;
  description: string;
  voteStartDate: Date;
  voteEndDate: Date;
}

/** 투표 중인 제안 */
export interface OpinionVoteInfoType extends CommonInfo {
  status: 'vote';
  voteData: any;
}

/** 투표 종료된 제안 */
export interface OpinionDetailInfoType extends CommonInfo {
  status: 'finished';
  contentData: any;
}

/** 시민 제안 관련 API 요청 타입 */
export type OpinionReqParams = {
  vote: any;
  finished: any;
  new: any;
};

/** 시민 제안 관련 API 응답 타입 */
export type OpinionResponses = {
  vote: any;
  finished: any;
  new: any;
};
