export type OpinionStatusType = 'IN_PROGRESS' | 'FINISHED';

export type OpinionSortType =
  | 'LATEST'
  | 'HIGHTEST_VOTE_COUNT'
  | 'LOWEST_VOTE_COUNT';

export interface OpinionType {
  id: number;
  title: string;
  thumbnail: string;
  startDate: string;
  endDate: string;
  isVoted: boolean;
  totalVoteCount: number;
  createdDate: string;
}

export interface OpinionOptionType {
  id: number;
  content: string;
  voteCount: number;
}

/** 투표 생성 Form 타입 */
export interface OpinionFormType {
  title: string;
  content: string;
  thumbnail: File | undefined;
  voteStartDate: Date;
  voteEndDate: Date;
  suggestionVotes: { index: number; opinion: string }[];
}

/** 시민 제안 관련 API 요청 타입 */
export type OpinionReqParams = {
  list: {
    size?: number;
    lastId?: number;
    sortType?: OpinionSortType;
    status?: OpinionStatusType;
  };
  detail: {
    suggestionId: number;
  };
  create: {
    title: string;
    content: string;
    thumbnail: File;
    suggestionVotes: string[];
  };
  voted: {
    suggestionId: number;
    suggestionVoteId: number;
  }
  reverted: {
    suggestionId: number;
    suggestionVoteId: number;
  }
};

/** 시민 제안 관련 API 응답 타입 */
export type OpinionResponses = {
  list: {
    lastId: number;
    totalVoteCount: number;
    hasNext: boolean;
    content: OpinionType[];
  };
  detail: OpinionType & {
    content: string;
    suggestionVotes: OpinionOptionType[];
    userVotedInfo?: {
      isVoted: boolean;
      votedId?: number;
    };
  };
};
