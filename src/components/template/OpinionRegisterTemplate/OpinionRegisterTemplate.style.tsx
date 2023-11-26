import styled from '@emotion/styled';

import { COLORS } from '@/constants/styles';

export const Wrapper = styled.div`
  ${({ theme }) => {
    const { colors, fonts } = theme;
    return {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      padding: '90px 30px 60px',

      '.titleInput': {
        width: '100%',
        paddingLeft: 'unset',
        ...fonts.mobile.subtitle1,

        border: 0,
        borderBottom: `1px solid ${colors.grayscale.gray100}`,
        color: colors.grayscale.gray400,

        '::placeholder': {
          color: colors.grayscale.gray100,
        },
      },

      '.contentInput': {
        width: '100%',
        height: '256px',
        verticalAlign: 'top',
        textAlign: 'left',
      },
    };
  }}
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 0 8px;

  margin-bottom: 28px;
`;

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 12px 0;
  margin-top: 30px;
`;

export const Thumbnail = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0 16px;
`;

export const TextArea = styled.textarea(({ theme }) => {
  const { colors, fonts } = theme;
  return {
    color: colors.grayscale.gray500,
    ...fonts.mobile.body2R,

    width: '100%',
    height: 300,
    resize: 'none',
    backgroundColor: colors.background2,
    border: 'none',
    borderRadius: 10,
    padding: '27px 18px',
  };
});

export const OptionList = styled.div`
  padding: 32px;
  display: flex;
  flex-direction: column;
  gap: 20px;

  border-radius: 10px;
  background: ${COLORS.grayscale.cremeWhite};
  box-shadow: 0px 0px 5px 0px rgba(147, 147, 147, 0.25);

  .addOptionButton {
    width: 100%;
  }

  .addOptionInput {
    width: 100%;
    border: 0;
  }
`;

export const Option = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 10px 16px;
  border-radius: 16px;
  border: 1px solid ${COLORS.grayscale.gray100};
  background: ${COLORS.grayscale.white};
`;

export const ButtonBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0 20px;

  margin: 96px auto 24px;
  border: 1px 0 0 0 solid ${COLORS.grayscale.gray100};
`;
