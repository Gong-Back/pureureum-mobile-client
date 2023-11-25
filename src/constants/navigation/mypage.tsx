export type MyPAGE_NAV_ITEM_NAME = 'card' | 'badge' | 'activity' | 'myinfo';

export const MypageNavInfo: Record<
  MyPAGE_NAV_ITEM_NAME,
  { path: string; text: string }
> = {
  card: {
    path: '/mypage/card',
    text: '문화 시민증',
  },
  badge: {
    path: '/mypage/badge',
    text: '뱃지 목록',
  },
  activity: {
    path: '/mypage/activity',
    text: '활동 목록',
  },
  myinfo: {
    path: '/mypage/myinfo',
    text: '내 정보 관리',
  },
};
