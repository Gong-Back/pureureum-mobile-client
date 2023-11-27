// middleware.ts
import { NextRequest, NextResponse } from 'next/server';

export async function middleware(request: NextRequest) {
  const accessToken = request.cookies.get('accessToken');
  const { pathname, origin } = request.nextUrl;

  // 로그인, 회원가입 시도 시 access token이 존재한다면 메인 화면으로 redirect.
  if (pathname.startsWith('/auth')) {
    if (accessToken) return NextResponse.redirect(origin);
  }

  // 마이페이지 접근 시 access token이 없다면 로그인 화면으로 redirect.
  if (pathname.startsWith('/mypage')) {
    if (!accessToken) {
      const loginUrl = new URL('/auth/login', origin);
      return NextResponse.redirect(loginUrl);
    }
  }

  return NextResponse.next();
}
