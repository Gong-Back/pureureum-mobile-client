import { API_URL, NEXT_SERVER_URL } from '@/constants/apis';
import { ApiResponse, AuthReqParams, AuthResponses } from '@/constants/types';

import { postAsync } from './API';

export class AuthRepository {
  /**
   * 기존 유저의 로그인을 처리하는 함수 loginAsync
   * @param email 유저의 이메일
   * @param password 유저의 비밀번호
   * @returns 성공 시 JWT 액세스 토큰 인계, 실패 시 에러 객체 반환
   */
  static async loginAsync({ email, password }: AuthReqParams['login']) {
    const response = await postAsync<
      AuthResponses['login'],
      AuthReqParams['login']
    >('/auth/login', {
      email,
      password,
    });
    return response;
  }

  /**
   *
   * 신규 유저의 회원가입을 처리하는 함수 registerAsync
   * @param email 유저의 이메일
   * @param name 유저의 실명
   * @param birthday 유저의 생일
   * @param gender 유저의 성별 (MALE, FEMALE)
   * @param socialType 소셜 플랫폼 타입 (NAVER, KAKAO, GOOGLE)
   * @returns 성공 시 true, 실패 시 false 반환
   */
  static async registerAsync({
    email,
    password,
    name,
    birthday,
    gender,
  }: AuthReqParams['register']) {
    const response = await postAsync<
      AuthResponses['register'],
      AuthReqParams['register']
    >(`/auth/register`, {
      name,
      email,
      password,
      birthday,
      gender,
    });
    return response;
  }

  /**
   * Next Api Route를 통해 프론트 서버에 저장되었던 JWT 토큰을 가져오는 함수 getJwtCookieAsync
   */
  static async getJwtCookieAsync() {
    const hostUrl = NEXT_SERVER_URL[process.env.NODE_ENV];
    const response = await fetch(`${hostUrl}/api/token`, {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
      },
    });
    const { data: { accessToken } = {} } =
      (await response.json()) as ApiResponse<AuthResponses['login']>;
    return accessToken;
  }

  /**
   * 토큰 갱신이 필요할 시 First-Site Cookie를 세팅하는 함수 setJwtCookieAsync
   * @param param.accessToken 서버로부터 받은 엑세스 토큰
   */
  static async setJwtCookieAsync(accessToken: string) {
    const hostUrl = NEXT_SERVER_URL[process.env.NODE_ENV];
    await fetch(`${hostUrl}/api/token`, {
      method: 'POST',
      body: JSON.stringify({ accessToken }),
      headers: {
        'Content-type': 'application/json',
      },
    });
  }

  /**
   * 서버로부터 받았던 JWT 를 보관한 Cookie를 삭제하는 함수 removeJwtCookieAsync
   */
  static async removeJwtCookieAsync() {
    const hostUrl = NEXT_SERVER_URL[process.env.NODE_ENV];
    await fetch(`${hostUrl}/api/token`, {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json',
      },
    });
  }
}
