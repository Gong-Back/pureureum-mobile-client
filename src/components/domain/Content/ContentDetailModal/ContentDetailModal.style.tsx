import styled from '@emotion/styled';

import { COLORS } from '@/constants/styles';

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 30px;
  height: 80vh;

  overflow-y: scroll;

  .link-btn {
    width: 100%;
    min-height: 40px;
  }
`;

export const TagsWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  margin-bottom: 12px;
`;

export const ThumbnailWrap = styled.div`
  width: 100%;
  min-height: 300px;
  border-radius: 5px;
  border: 1px solid #f1f1f1;
  background-color: ${COLORS.grayscale.gray100};

  position: relative;
  overflow: hidden;
  margin: 8px 0px 20px;
`;

export const RecruitInfoWrap = styled.div`
  width: 100%;
  min-height: 100px;
  background-color: ${COLORS.grayscale.cremeWhite};
  box-shadow: 0px 0px 5px 0px rgba(147, 147, 147, 0.25);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  span {
    font-weight: 700;
    color: ${COLORS.primary.default};
  }
`;

export const DetailInfoWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 24px 0px 32px;
`;

export const InfoField = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  min-height: 45px;
  border-bottom: 1px solid ${COLORS.grayscale.gray100};

  :last-of-type {
    border: none;
  }
`;
