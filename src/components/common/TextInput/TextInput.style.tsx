import styled from '@emotion/styled';

import { TextInputProps } from './TextInput';

const DEFAULT_SIZES = {
  small: { width: 300, height: 40 },
  medium: { width: 400, height: 45 },
  large: { width: 500, height: 50 },
};

export const Input = styled.input<
  Omit<TextInputProps, 'value' | 'fieldId' | 'fieldOption'>
>(({ theme, isFilled, isRound, sizeType, width }) => {
  const { colors, fonts } = theme;
  const isSmallSize = sizeType === 'small';
  return {
    width: width ?? DEFAULT_SIZES[sizeType ?? 'medium'].width,
    height: DEFAULT_SIZES[sizeType ?? 'medium'].height,
    paddingLeft: 20,
    color: colors.grayscale.gray500,
    border: isFilled ? 'none' : `1px solid ${colors.grayscale.gray500}`,
    borderRadius: isRound ? 30 : 5,
    backgroundColor: isFilled ? colors.background2 : colors.grayscale.white,

    fontSize: fonts.mobile[isSmallSize ? 'body3' : 'body2R'].fontSize,
    fontWeight: fonts.mobile[isSmallSize ? 'body3' : 'body2R'].fontWeight,
    lineHeight: fonts.mobile[isSmallSize ? 'body3' : 'body2R'].lineHeight,

    '::-webkit-inner-spin-button ': {
      WebkitAppearance: 'none',
      margin: 0,
    },
  };
});
