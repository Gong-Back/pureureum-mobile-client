import styled from '@emotion/styled';

export const Wrapper = styled.div`
  width: 100%;
  max-width: 450px;
  height: 100vh;

  position: fixed;
  top: 0;
  left: auto;

  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;

  z-index: 999;
  background-color: rgba(0, 0, 0, 0.4);
`;
