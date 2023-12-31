import styled from '@emotion/styled';

export const Wrapper = styled.div`
  padding: 100px 60px;

  .title > span {
    font-weight: 700;
  }

  .title {
    margin: 4px 0px 12px;
  }
`;

export const ListWrap = styled.div`
  display: ${(props: { display: boolean }) =>
    props.display ? 'block' : 'none'};
`;
