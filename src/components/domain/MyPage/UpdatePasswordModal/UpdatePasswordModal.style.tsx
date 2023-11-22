import styled from '@emotion/styled';

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px 0px;

  width: 330px;
  margin: 80px auto 30px auto;

  > input {
    width: 330px;
    &:last-child {
      margin-bottom: 110px;
    }
  }

  > .confirm-btn {
    width: 200px;
  }
`;

export const ButtonBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin: 110px auto 0 auto;

  > .feedback {
    margin-bottom: 16px;
  }

  > .confirm-btn {
    width: 200px;
  }
`;
