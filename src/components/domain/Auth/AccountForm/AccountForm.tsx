import React from 'react';
import { useFormContext } from 'react-hook-form';

import NewTextInput from '@/components/common/TextInput/NewTextInput';
import Text from '@/components/common/Text';

import { COLORS } from '@/constants/styles';
import { type AuthFormType } from '@/constants/types';
import * as style from './AccountForm.style';

const AccountForm = () => (
    <style.Wrapper>
      <style.Section>
        <NewTextInput
          name="email"
          rules={{ required: true, minLength: 1 }}
          placeholder="아이디"
          isRound
          className="account-input email-input"
        />
        <Text
          fontStyleName="caption"
          color={COLORS.grayscale.gray400}
          className="description"
        >
          8 ~ 15자 영문, 숫자
        </Text>
      </style.Section>
      <style.Section>
        <NewTextInput
          name="password"
          rules={{
            required: true,
            minLength: 1,
          }}
          placeholder="비밀번호"
          type="password"
          isRound
        />
        <Text
          fontStyleName="caption"
          color={COLORS.grayscale.gray400}
          className="description"
        >
          영문, 숫자, 특수 문자 1개 이상 포함, 8자 이상
        </Text>
      </style.Section>
      <style.Section>
      <NewTextInput
        sizeType="medium"
        name="confirmPassword"
        rules={{
          required: true,
          minLength: 1,
        }}
        placeholder="비밀번호 확인"
        type="password"
        isRound
      />
        <Text
          fontStyleName="caption"
          color={COLORS.grayscale.gray400}
          className="description"
        >
          상단에 입력한 비밀번호를 동일하게 입력해주세요.
        </Text>
      </style.Section>
    </style.Wrapper>
  );

export default AccountForm;
