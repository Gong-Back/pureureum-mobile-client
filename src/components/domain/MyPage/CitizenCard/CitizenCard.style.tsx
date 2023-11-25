import styled from '@emotion/styled';

export const Wrapper = styled.section`
  width: 630px;
  height: 360px;
  border-radius: 10px;
  background: linear-gradient(
      149deg,
      rgba(221, 255, 233, 0.25) 6.43%,
      rgba(228, 255, 237, 0.25) 6.44%,
      rgba(67, 193, 110, 0.25) 116.02%,
      rgba(134, 222, 164, 0.25) 116.02%,
      rgba(134, 222, 164, 0.25) 116.02%
    ),
    #fff;
  box-shadow: 0px 0px 4px 0px rgba(74, 74, 74, 0.25);
  padding: 50px;

  @media screen and (max-width: 360px) {
    width: 580px;
    height: 330px;
    padding: 20px;
  }

  .card-content {
    text-align: center;
    margin-top: 30px;
  }

  .prr-name {
    text-align: center;
    margin-top: 20px;
  }
`;

export const ProfileWrap = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
`;

export const ProfileImg = styled.div`
  width: 150px;
  height: 150px;
  border-radius: 150px;

  position: relative;
  overflow: hidden;
`;

export const ProfileTextWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2px;
`;
