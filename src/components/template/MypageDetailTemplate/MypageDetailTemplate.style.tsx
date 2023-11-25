import styled from '@emotion/styled';

export const Wrapper = styled.div`
  padding: 100px 30px;

  .card {
    position: relative;
    min-height: calc(100vh - 60px);
  }

  .citizen-card {
    position: absolute;
    top: 630px;
    left: 0;
    transform-origin: top left;
    transform: rotate(270deg);
  }

  .activity {
    padding: 0px 20px;
  }

  .myinfo {
    margin-top: 50px;
  }
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 20px;
  cursor: pointer;
`;

export const ContentWrap = styled.div`
  display: flex;
  flex-direction: column;
`;
