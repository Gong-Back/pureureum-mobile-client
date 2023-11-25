import React from 'react';
import Link from 'next/link';

import LogoSvg from '@/assets/icons/prrMobileLogo.svg';

import Text from '@/components/common/Text';
import Button from '@/components/common/Button';
import LoginForm from '@/components/domain/Auth/LoginForm';
import { COLORS } from '@/constants/styles';

import * as style from './LoginTemplate.style';

const LoginTemplate = () => (
    <style.Wrapper>
      <style.Header>
        <LogoSvg width={192}/>
        <Text fontStyleName="body2R" color={COLORS.grayscale.gray500}>
          로그인해서 재밌는 프로젝트들을 경험해보세요!
        </Text>
      </style.Header>
      <LoginForm />
        <style.Section>
          <Text
            fontStyleName="body2R"
            color={COLORS.grayscale.gray500}
            className="description"
          >
            아직 푸르름 계정이 없다면
          </Text>
          <Link href="/auth/register">
            <Button
              themeColor={COLORS.primary.default}
              isRound
            >
              회원가입
            </Button>
          </Link>
        </style.Section>
    </style.Wrapper>
  );
export default LoginTemplate;
