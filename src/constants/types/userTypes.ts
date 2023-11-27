import { GenderType } from './authTypes';
import { CultureEventInfoType } from './contentTypes';

export type UserReqParams = {
  updateInfo: {
    type: 'password' | 'nickname';
    updatedValue: string;
  };
  updateProfile: {
    profileImageFile: File | undefined;
  };
};

export type UserResponses = {
  info: {
    email: string;
    name: string;
    nickname: string;
    gender: GenderType;
    birthday: string;
    profileUrl: string;
  };
  citizen: {
    nickname: string;
    name: string;
    joinDate: string;
    profileUrl: string;
    attendCount: number;
  };
  badge: { badgeUrl: { badgeUrl: string; isLocked: boolean }[] };
  activity: {
    listTotalCount: number;
    culturalEventDtos: CultureEventInfoType[];
  };
};

export type UserFormType = {
  updatePassword: {
    currentPassword: string;
    changedPassword: string;
    confirmedPassword: string;
  };
};
