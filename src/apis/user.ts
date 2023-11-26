import { UserReqParams, UserResponses } from '@/constants/types';

import { getAsync, postAsync } from './API';

export class UserRepository {
  /**
   * 유저의 회원 정보를 가져오는 함수 getUserInfoAsync
   * @returns 가입 성공 시 200, 실패 시 에러 반환 (400 등)
   */
  static async getUserInfoAsync() {
    const response = await getAsync<UserResponses['info']>('/users/me', {
      headers: {
        requireToken: true,
      },
    });
    return response;
  }

  /**
   * 유저의 문화 시민증에 들어갈 정보를 가져오는 함수 getUserCitizenInfoAsync
   * @returns 가입 성공 시 200, 실패 시 에러 반환 (400 등)
   */
  static async getUserCitizenInfoAsync() {
    const response = await getAsync<UserResponses['citizen']>(
      '/users/culture-citizenship',
      {
        headers: {
          requireToken: true,
        },
      },
    );
    return response;
  }

  /**
   * 유저의 문화 시민증에 들어갈 정보를 가져오는 함수 getUserBadgesInfoAsync
   * @returns 가입 성공 시 200, 실패 시 에러 반환 (400 등)
   */
  static async getUserBadgesInfoAsync() {
    const response = await getAsync<UserResponses['badge']>('/users/badges', {
      headers: {
        requireToken: true,
      },
    });
    return response;
  }

  /**
   * 유저의 문화 콘텐츠 활동 정보를 가져오는 함수 getUserActivityAsync
   * @returns 가입 성공 시 200, 실패 시 에러 반환 (400 등)
   */
  static async getUserActivityAsync() {
    const response = await getAsync<UserResponses['activity']>(
      '/cultural-events/my-attended',
      {
        headers: {
          requireToken: true,
        },
      },
    );
    return response;
  }

  /**
   * 유저의 회원 정보를 업데이트 하는 함수 updateUserInfoAsync
   * @param type 변경하고자 하는 타입 (비밀번호, 핸드폰 번호, 닉네임 중 1개)
   * @param updatedValue 변경하고자 하는 정보
   * @returns 성공 시 200 반환, 실패 시 40X 에러 반환
   */
  static async updateUserInfoAsync({
    type,
    updatedValue,
  }: UserReqParams['updateInfo']) {
    // eslint-disable-next-line no-unused-vars
    await postAsync<undefined, { [key in string]: string }>(
      '/users/update/info',
      {
        [type]: updatedValue,
      },
      {
        headers: {
          requireToken: true,
        },
      },
    );
  }

  /**
   * 유저의 프로필 이미지를 업데이트 하는 함수 updateProfileImageAsync
   * @param profileImageFile 새롭게 업데이트 하려는 프로필 이미지 (undefined인 경우, 기본 이미지로 롤백)
   * @returns 성공 시 200 반환, 실패 시 40X 에러 반환
   */
  static async updateProfileImageAsync(profileImageFile: File | undefined) {
    const formData = new FormData();
    if (profileImageFile) formData.append('profileImageFile', profileImageFile);

    await postAsync<undefined, FormData>('/users/update/profile', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
        requireToken: true,
      },
    });
  }
}
