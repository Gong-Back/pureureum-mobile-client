import styled from '@emotion/styled';

import { FontStyleName } from '@/constants/styles';

interface TextWrapProps {
  color?: string;
  fontStyleName: FontStyleName;
}

export const TextWrap = styled.div<TextWrapProps>(
  ({ theme, color, fontStyleName }) => {
    const { colors, fonts } = theme;
    return {
      color: color ?? colors.grayscale.dark,
      fontSize: fonts.mobile[fontStyleName].fontSize,
      fontWeight: fonts.mobile[fontStyleName].fontWeight,
      lineHeight: fonts.mobile[fontStyleName].lineHeight,
    };
  },
);
