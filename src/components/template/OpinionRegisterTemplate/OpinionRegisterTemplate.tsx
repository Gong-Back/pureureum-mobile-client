import { useRouter } from 'next/router';
import { useMemo, useState } from 'react';

import {
  Controller,
  FormProvider,
  SubmitHandler,
  useFieldArray,
  useForm,
  useWatch,
} from 'react-hook-form';

import { ApiErrorInstance } from '@/apis/API';
import { OpinionRepository } from '@/apis/opinion';
import CloseIconSvg from '@/assets/icons/closeIcon.svg';
import LeftIconSvg from '@/assets/icons/leftIcon.svg';
import Button from '@/components/common/Button';
import Text from '@/components/common/Text';
import TextInput from '@/components/common/TextInput';
import NewTextInput from '@/components/common/TextInput/NewTextInput';
import { COLORS } from '@/constants/styles';
import { OpinionFormType } from '@/constants/types/OpinionTypes';
import useUploadFile from '@/hooks/useUploadFile';
import FormatUtil from '@/utils/format';

import * as style from './OpinionRegisterTemplate.style';

const OpinionRegisterTemplate = () => {
  const router = useRouter();

  const formMethods = useForm<OpinionFormType>({
    defaultValues: {
      title: '',
      content: '',
      thumbnail: undefined,
      suggestionVotes: [],
    },
  });

  const {
    control,
    handleSubmit,
    setValue,
    setError,
  } = formMethods;

  const {
    fields: opinions,
    append,
    remove: removeOpinion,
  } = useFieldArray({
    control,
    name: 'suggestionVotes',
  });

  const [thumbnail] = useWatch({
    control,
    name: ['thumbnail'],
  });

  const { fileInputRef, handleUploadFile, removeUploadedFile } = useUploadFile({
    maxFileSize: 10 * 1024 * 1024,
    allowFileTypes: ['jpeg', 'jpg', 'png'],
    onError: {
      exceedFileSize: () =>
        setError('thumbnail', {
          message: '파일 용량은 최대 10MB 입니다.',
        }),
      mismatchExtractType: () =>
        setError('thumbnail', {
          message: '올바른 파일 확장자가 아닙니다. (jpeg, png)',
        }),
    },
    onSubmit: (uploadedFile) => setValue('thumbnail', uploadedFile),
    onRemove: () => setValue('thumbnail', undefined),
  });

  const [newOpinion, setNewOpinion] = useState('');

  const isNewOpinionAvailable = useMemo(
    () =>
      newOpinion.length &&
      !opinions.map(({ opinion }) => opinion).includes(newOpinion),
    [newOpinion, opinions],
  );

  const addOptionInput = () => {
    if (!isNewOpinionAvailable) return;
    setNewOpinion('');
    append({ index: opinions.length, opinion: newOpinion });
  };

  const openFileDialog = () => fileInputRef.current?.click();

  const submitNewOpinion: SubmitHandler<OpinionFormType> = async ({
    title,
    content,
    suggestionVotes,
  }) => {
    try {
      if (!thumbnail) return;
      await OpinionRepository.postCreateOpinionAsync({
        title,
        content,
        thumbnail,
        suggestionVotes: suggestionVotes.map(({ opinion }) => opinion),
      });
      router.replace('/opinions');
    } catch (error) {
      if (error instanceof ApiErrorInstance) {
        setError('root', { message: error.errorMessage });
      } else {
        throw error;
      }
    }
  };

  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <FormProvider {...formMethods}>
      <style.Wrapper>
        <style.Header>
          <LeftIconSvg
            width={28}
            height={28}
            onClick={() => router.push('/opinion')}
          />
          <Text fontStyleName="subtitle2B" color={COLORS.grayscale.gray700}>
            제안하기
          </Text>
        </style.Header>
        <NewTextInput
          name="title"
          className="titleInput"
          sizeType="large"
          placeholder="제목을 작성해주세요"
          rules={{ required: true, minLength: 4, maxLength: 30 }}
        />
        <style.Section>
          <Text fontStyleName="subtitle2B" color={COLORS.grayscale.gray700}>
            설명 작성하기
          </Text>
          <Controller
            control={control}
            name="content"
            rules={{ required: true, minLength: 1, maxLength: 300 }}
            render={({ field: { onChange, value } }) => (
              <style.TextArea
                placeholder="제안하고자 하는 컨텐츠에 대한 설명을 적어주세요."
                value={value}
                onChange={onChange}
              />
            )}
          />
        </style.Section>
        <style.Section>
          <Text fontStyleName="subtitle2B" color={COLORS.grayscale.gray700}>
            썸네일 등록하기
          </Text>
          <style.Thumbnail>
            <NewTextInput
              name="thumbnail"
              isFilled
              displayedValue={
                thumbnail
                  ? `${thumbnail.name} (${FormatUtil.formatfileSize(
                      thumbnail.size,
                    )})`
                  : ''
              }
              placeholder="썸네일 이미지를 등록해주세요"
              rules={{ required: true }}
              readOnly
            />
            <input
              ref={fileInputRef}
              type="file"
              style={{ display: 'none' }}
              onChange={handleUploadFile}
            />
            <Button
              isFilled
              className="find-button"
              onClick={thumbnail ? removeUploadedFile : openFileDialog}
            >
              {thumbnail ? '파일 제거 ' : '파일 찾기'}
            </Button>
          </style.Thumbnail>
        </style.Section>
        <style.Section>
          <Text fontStyleName="subtitle2B" color={COLORS.grayscale.gray700}>
            선택지 생성하기
          </Text>
          <style.OptionList>
            {opinions.map(({ index, opinion }) => (
              <style.Option key={index}>
                <Text
                  fontStyleName="body3"
                  className="input"
                  color={COLORS.grayscale.gray700}
                >
                  {`${index + 1}. ${opinion}`}
                </Text>
                <CloseIconSvg
                  width={16}
                  height={16}
                  onClick={() => removeOpinion(index)}
                />
              </style.Option>
            ))}
            <TextInput
              className="addOptionInput"
              placeholder="새로운 의견을 입력해주세요."
              value={newOpinion}
              onChange={(e) => setNewOpinion(e.target.value)}
            />
            <Button
              className="addOptionButton"
              isFilled
              isRound
              themeColor={
                isNewOpinionAvailable
                  ? COLORS.primary.default
                  : COLORS.grayscale.gray400
              }
              onClick={addOptionInput}
            >
              선택지 추가
            </Button>
          </style.OptionList>
        </style.Section>
        <style.ButtonBox>
          <Button
            isFilled
            isRound
            onClick={() => handleSubmit(submitNewOpinion)()}
          >
            작성 완료
          </Button>
          <Button
            isRound
            themeColor={COLORS.grayscale.gray400}
            onClick={() => router.push('/opinion')}
          >
            작성 취소
          </Button>
        </style.ButtonBox>
      </style.Wrapper>
    </FormProvider>
  );
};

export default OpinionRegisterTemplate;
