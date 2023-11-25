import styled from '@emotion/styled';

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  width: 100%;
  padding: 40px 25px;

  > input {
    width: 100%;
  }
`;

export const ButtonBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-top: 20px;

  > .feedback {
    margin-bottom: 16px;
  }

  > .confirm-btn {
    width: 100%;
  }
`;
