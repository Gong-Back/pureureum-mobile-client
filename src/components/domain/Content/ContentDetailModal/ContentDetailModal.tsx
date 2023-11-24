import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

import dayjs from 'dayjs';

import Button from '@/components/common/Button';
import ModalTemplate from '@/components/common/ModalTemplate';
import Tag from '@/components/common/Tag';
import Text from '@/components/common/Text';
import { COLORS } from '@/constants/styles';
import { CultureContentInfoType } from '@/constants/types/CultureContentTypes';

import * as styles from './ContentDetailModal.style';

const ContentDetailModal = ({ data }: { data: CultureContentInfoType }) => {
  const router = useRouter();
  const {
    title,
    thumbnail,
    category,
    state,
    description,
    paymentMethod,
    placeName,
    target,
    serviceUrl,
    latitude,
    longitude,
    serviceStartDateTime,
    serviceEndDateTime,
    registerStartDateTime,
    registerEndDateTime,
  } = data;

  const detailInfo = [
    { label: '주관', content: '주관' },
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
          <Tag label={`#${target}`} />
        </styles.TagsWrap>
        <Text
          fontStyleName="subtitle1"
          color={COLORS.grayscale.gray700}
          className="title"
        >
          {title}
        </Text>
        <styles.ThumbnailWrap>
          <Image src={thumbnail} layout="fill" />
        </styles.ThumbnailWrap>
        <styles.RecruitInfoWrap>
          <Text fontStyleName="body1R" color={COLORS.grayscale.dark}>
            모집일이 <span>2일</span> 남았어요.
          </Text>
          <Text fontStyleName="body1R" color={COLORS.grayscale.dark}>
            <span>20명</span>을 모집하는데 <span>13명</span>이 지원했어요.
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
