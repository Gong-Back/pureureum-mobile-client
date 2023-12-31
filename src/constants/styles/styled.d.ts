import '@emotion/react';

import { COLORS } from './color';
import { FONT_STYLE_MOBILE } from './font';

declare module '@emotion/react' {
  export interface Theme {
    colors: typeof COLORS;
    fonts: {
      mobile: typeof FONT_STYLE_MOBILE;
    };
  }
}
