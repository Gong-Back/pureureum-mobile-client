import styled from '@emotion/styled';

import { COLORS } from '@/constants/styles';

export const Wrapper = styled.div`
  width: 100%;
  max-width: 450px;
  gap: 8px;
  display: flex;
  flex-direction: column;
  cursor: pointer;
`;

export const ThumbnailWrap = styled.div`
  width: 100%;
  height: 205px;
  border-radius: 15px;
  background-color: ${COLORS.grayscale.gray100};
  box-shadow: 0px 0px 2px 2px ${COLORS.grayscale.gray100};
  position: relative;
  overflow: hidden;
`;

export const InfoWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  .content-title {
    width: 100%;
    height: fit-content;
    /*height: 60px;*/
    overflow: hidden;
    text-overflow: ellipsis;

    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
  }

  .catgory-tag {
    display: inline-flex;
    margin-right: 6px;
  }

  .content-time {
    display: flex;
    align-items: center;
  }

  .content-time svg {
    margin-right: 4px;
  }
`;
