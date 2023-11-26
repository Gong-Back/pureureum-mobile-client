import { useRouter } from 'next/router';
import { useCallback } from 'react';

import {
  FormProvider,
  type SubmitHandler,
  useForm,
  useWatch,
} from 'react-hook-form';

import { ApiErrorInstance } from '@/apis/API';
import { AuthRepository } from '@/apis/auth';
import Button from '@/components/common/Button';
import Text from '@/components/common/Text';
import AccountForm from '@/components/domain/Auth/AccountForm';
import PersonalDataForm from '@/components/domain/Auth/PersonalDataForm';
import REGISTER_FALLBACK from '@/constants/fallback/register';
import { COLORS } from '@/constants/styles';
import { type AuthFormType } from '@/constants/types';
import ValidationUtil from '@/utils/validation';

import * as style from './RegisterTemplate.style';

const RegisterStepHeader = [
  {
    title: '회원가입',
    subtitle: '사용할 아이디와 비밀번호를 입력해주세요.',
  },
  {
    title: '환영해요 👋',
    subtitle: '당신의 몇 가지 정보가 궁금해요!',
  },
];

const today = new Date();
const [currentYear, currentMonth, currentDay] = [
  today.getUTCFullYear(),
  today.getUTCMonth() + 1,
  today.getUTCDate(),
];

const RegisterTemplate = () => {
  const router = useRouter();
  const formMethods = useForm<AuthFormType['register']>({
    defaultValues: {
      email: '',
      password: '',
      confirmPassword: '',
      name: '',
      nickname: '',
      birthday: [currentYear, currentMonth, currentDay],
      gender: 'MALE',
      currentStep: 0,
    },
  });
  const {
    control,
    setValue,
    setError,
    formState: { errors },
    handleSubmit,
  } = formMethods;

  const [
    name,
    email,
    password,
    confirmPassword,
    birthday,
    currentStep,
  ] = useWatch({
    control,
    name: [
      'name',
      'email',
      'password',
      'confirmPassword',
      'birthday',
      'currentStep',
    ],
  });

  const { title, subtitle } = RegisterStepHeader[currentStep];

  // 다음 스텝으로 넘어가기 위한 조건을 충족했는지를 판별하는 함수 shouldCheckCurrentStep
  const shouldCheckCurrentStep = useCallback(() => {
    switch (currentStep) {
      case 0:
        return !!(
          ValidationUtil.validateEmail(email) &&
          password &&
          password === confirmPassword
        );
      case 1:
        return !!(
          ValidationUtil.validateName(name) &&
          ValidationUtil.validateBirthDay(birthday)
        );
      default:
        return false;
    }
  }, [currentStep, email, password, confirmPassword, name, birthday]);

  const register: SubmitHandler<AuthFormType['register']> = async (
    submittedData,
  ) => {
    try {
      await AuthRepository.registerAsync({
        ...submittedData,
        birthday: submittedData.birthday
          .map((date) => String(date).padStart(2, '0'))
          .join('-'),
      });
      router.replace('/auth/login');
    } catch (error) {
      if (error instanceof ApiErrorInstance) {
        setError('root', { message: error.errorMessage });
      } else {
        throw error;
      }
    }
  };

  const handleCurrentStep = () => {
    switch (currentStep) {
      case 0: {
        if (!ValidationUtil.validatePassword(password)) {
          setError('root', { message: REGISTER_FALLBACK.INVALID_PASSWORD });
          return;
        }
        if (confirmPassword !== password) {
          setError('root', { message: REGISTER_FALLBACK.NOT_MATCH_PASSWORDS });
          return;
        }
        setValue('currentStep', currentStep + 1);
        break;
      }
      case 1: {
        if (!ValidationUtil.validateName(name)) {
          setError('root', { message: REGISTER_FALLBACK.INVALID_NAME });
          return;
        }
        if (!ValidationUtil.validateBirthDay(birthday)) {
          setError('root', { message: REGISTER_FALLBACK.INVALID_BIRTHDAY });
          return;
        }
        handleSubmit(register)();
        break;
      }
      default:
        break;
    }
  };

  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <FormProvider {...formMethods}>
      <style.Wrapper>
        <style.Header>
          <Text color={COLORS.grayscale.dark} fontStyleName="subtitle1">
            {title}
          </Text>
          <Text color={COLORS.grayscale.gray500} fontStyleName="body2R">
            {subtitle}
          </Text>
        </style.Header>
        <style.VisibleSection>
          <style.Section currentRegisterStep={currentStep}>
            <AccountForm />
            <PersonalDataForm />
          </style.Section>
        </style.VisibleSection>
        <style.Footer>
          {errors.root ? (
            <style.Feedback>{errors.root.message}</style.Feedback>
          ) : null}
          <Button
            themeColor={
              shouldCheckCurrentStep()
                ? COLORS.primary.default
                : COLORS.grayscale.gray400
            }
            isFilled
            onClick={handleCurrentStep}
            sizeType="large"
            className="confirm-button"
          >
            반가워요!
          </Button>
        </style.Footer>
      </style.Wrapper>
    </FormProvider>
  );
};

export default RegisterTemplate;
