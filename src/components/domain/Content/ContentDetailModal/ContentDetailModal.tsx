import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react';

import dayjs from 'dayjs';

import Button from '@/components/common/Button';
import ModalTemplate from '@/components/common/ModalTemplate';
import Tag from '@/components/common/Tag';
import Text from '@/components/common/Text';
import { COLORS } from '@/constants/styles';
import { CultureEventInfoType } from '@/constants/types/contentTypes';

import * as styles from './ContentDetailModal.style';

const ContentDetailModal = ({ data }: { data: CultureEventInfoType }) => {
  const router = useRouter();

  const {
    thumbnailUrl,
    clasName: category,
    content: title,
    paymentMethod,
    placeName,
    target,
    serviceUrl,
    serviceStartDateTime,
    serviceEndDateTime,
    registerEndDateTime,
  } = data;

  const leftTime = dayjs(registerEndDateTime).diff(dayjs(), 'day');
  const targetStr = target.includes('제한없음') ? '모두' : target;

  const detailInfo = [
    { label: '위치', content: placeName },
    {
      label: '기간',
      content: `${dayjs(serviceStartDateTime).format('YYYY.MM.DD')} ~ ${dayjs(
        serviceEndDateTime,
      ).format('YYYY.MM.DD')}`,
    },
    { label: '비용', content: paymentMethod },
  ];

  return (
    <ModalTemplate title="문화 콘텐츠">
      <styles.Wrapper>
        <styles.TagsWrap>
          <Tag label={`#${category}`} />
        </styles.TagsWrap>
        <Text
          fontStyleName="subtitle1"
          color={COLORS.grayscale.gray700}
          className="title"
        >
          {title}
        </Text>
        <styles.ThumbnailWrap>
          <Image src={thumbnailUrl} layout="fill" />
        </styles.ThumbnailWrap>
        <styles.RecruitInfoWrap>
          <Text fontStyleName="body1R" color={COLORS.grayscale.dark}>
            모집일이 <span>{leftTime}일</span> 남았어요!
          </Text>
          <Text fontStyleName="body1R" color={COLORS.grayscale.dark}>
            <span>{targetStr}</span> 에게 추천해요!
          </Text>
        </styles.RecruitInfoWrap>
        <styles.DetailInfoWrap>
          {detailInfo.map(({ label, content }) => (
            <styles.InfoField key={label}>
              <Text fontStyleName="body1B" color={COLORS.primary.default}>
                {label}
              </Text>
              <Text fontStyleName="body1R" color={COLORS.grayscale.gray700}>
                {content}
              </Text>
            </styles.InfoField>
          ))}
        </styles.DetailInfoWrap>
        <Button
          sizeType="large"
          isFilled
          isRound
          className="link-btn"
          onClick={() => router.push(serviceUrl)}
        >
          더 자세히 알아볼게요
        </Button>
      </styles.Wrapper>
    </ModalTemplate>
  );
};

export default ContentDetailModal;
