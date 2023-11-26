import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 150px 60px 60px;
`;

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  gap: 8px 0px;

  margin-bottom: 48px;
`;

export const Section = styled.section`
  display: flex;
  justify-content: space-between;
  width: 335px;

  > .description {
    margin: auto 0px;
    text-align: left;
  }
`;
