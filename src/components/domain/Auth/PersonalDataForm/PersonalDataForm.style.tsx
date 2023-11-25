import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px 0px;

  width: 100%;
`;

export const Section = styled.section`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;

  > .title {
    width: 100%;
    margin-bottom: 8px;
  }

  > .input {
    width: 100px;
    &::placeholder {
      text-align: right;
      padding-right: 25px;
    }
  }
`;

export const InputWrapper = styled.div`
  display: flex;
  position: relative;
`;

export const ToggleButton = styled.button<{ isSelected?: boolean }>(
  ({ theme, isSelected }) => {
    const { colors, fonts } = theme;
    return {
      width: '47.5%',
      padding: '11px 0',

      color: isSelected ? colors.grayscale.white : colors.grayscale.gray500,
      ...fonts.mobile.body2B,
      textAlign: 'center',

      background: isSelected
        ? colors.primary.default
        : colors.grayscale.gray100,
      borderRadius: '24px',
    };
  },
);
