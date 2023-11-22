import styled from '@emotion/styled';

import { COLORS } from '@/constants/styles';

export const Wrapper = styled.section`
  display: flex;
  gap: 0px 21px;
  width: 366px;

  margin-right: auto;
`;

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px 0;

  margin: 0;
`;

export const ButtonBox = styled.div`
  display: flex;
  gap: 0px 15px;

  > .profile-img {
    width: 140px;
  }
`;

export const DefaultProfileImg = styled.div`
  width: 90px;
  height: 90px;

  background: ${COLORS.primary.logo};
  border-radius: 50%;
`;
