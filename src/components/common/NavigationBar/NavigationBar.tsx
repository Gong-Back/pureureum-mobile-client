import { useRouter } from 'next/router';

import PRRMobileLogo from '@/assets/icons/prrMobileLogo.svg';
import { NavInfo } from '@/constants/navigation';

import Button from '../Button';
import * as style from './NavigationBar.style';

interface NavigationBarProps {
  isLogin: boolean;
}

const NavigationBar = ({ isLogin }: NavigationBarProps) => {
  const router = useRouter();

  return (
    <style.Wrapper>
      <style.LogoWrapper>
        <PRRMobileLogo
          width="132"
          height="33"
          onClick={() => router.push(NavInfo.home.path)}
        />
      </style.LogoWrapper>
      <style.NavItemList>
        {isLogin ? (
          <p>프로필</p>
        ) : (
          <Button
            sizeType="small"
            isRound
            onClick={() => router.push('/auth/login')}
            className="login-btn"
          >
            로그인
          </Button>
        )}
      </style.NavItemList>
    </style.Wrapper>
  );
};

export default NavigationBar;
