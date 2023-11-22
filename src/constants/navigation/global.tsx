import { ReactElement } from 'react';

import CommunityIcon from '@/assets/icons/communityIcon.svg';
import HomeIcon from '@/assets/icons/homeIcon.svg';
import UserIcon from '@/assets/icons/userIcon.svg';

export type NAV_ITEM_NAME = 'home' | 'mypage' | 'opinion';

export const NavInfo: Record<
  NAV_ITEM_NAME,
  { path: string; text: string; icon?: ReactElement }
> = {
  home: {
    path: '/',
    text: '홈',
    icon: <HomeIcon />,
  },
  opinion: {
    path: '/opinion',
    text: '시민 의견',
    icon: <CommunityIcon />,
  },
  mypage: {
    path: '/mypage',
    text: '나의 푸르름',
    icon: <UserIcon />,
  },
};

// Mobile 하단 네비게이션 내 메뉴
export const MobileNavList = ['opinion', 'home', 'mypage'] as NAV_ITEM_NAME[];
