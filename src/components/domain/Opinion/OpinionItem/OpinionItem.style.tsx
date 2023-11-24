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
  position: relative;
  overflow: hidden;
`;

export const InfoWrap = styled.div`
  .opinion-title {
    width: 100%;
    height: 60px;
    overflow: hidden;
    text-overflow: ellipsis;

    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
  }

  .status-tag {
    display: inline-flex;
    margin-right: 6px;
  }
`;
