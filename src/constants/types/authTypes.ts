export type GenderType = 'MALE' | 'FEMALE';
export type SocialPlatformType = 'naver' | 'kakao' | 'google';

export type AuthReqParams = {
  'login': {
    email: string;
    password: string;
  }
  'register': {
    name: string;
    email: string;
    birthday: [number, number, number];
    gender: GenderType;
    password: string;
  }
  'jwt': {
    accessToken: string;
  }
}

export type AuthResponses = {
  login: {
    accessToken: string;
  };
  register: {
    accessToken: string;
  };
  tempSearch: {
    email: string;
    socialType: SocialPlatformType;
  };
};

export type AuthFormType = {
  register: {
    email: string,
    password: string,
    confirmPassword: string,
    name: string;
    birthday: [number, number, number];
    gender: GenderType;
    currentStep: number;
  };
  login: {
    email: string,
    password: string,
  }
};
