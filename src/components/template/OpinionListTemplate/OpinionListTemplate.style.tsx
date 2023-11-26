import { COLORS } from '@/constants/styles';
import styled from '@emotion/styled';

export const Wrapper = styled.div`
  padding: 100px 60px;
`;

export const ListWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  margin-top: 24px;
`;

export const BottomWrap = styled.div`
  position: sticky;
  bottom: 60px;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  padding: 24px 0;

  background-color: rgba(250, 250, 250, 0.80);

  .submit {
    width: 340px;
  }
` 