export const FONT_STYLE_NAME = {
  title: 'title',
  subtitle1: 'subtitle1',
  subtitle2B: 'subtitle2B',
  subtitle2R: 'subtitle2R',
  subtitle3: 'subtitle3',
  body1B: 'body1B',
  body1R: 'body1R',
  body2B: 'body2B',
  body2R: 'body2R',
  body3: 'body3',
  caption: 'caption',
} as const;

export type FontStyleName =
  typeof FONT_STYLE_NAME[keyof typeof FONT_STYLE_NAME];

export interface FontStyle {
  fontSize: number;
  fontWeight: number;
  lineHeight: string;
}

const LINE_HEIGHT_RATIO = 1.6;

/**
 * Mobile 버전에 쓰일 font style 상수 모음 (figma 참조)
 */
export const FONT_STYLE_MOBILE: Record<FontStyleName, FontStyle> = {
  [FONT_STYLE_NAME.title]: {
    fontSize: 24,
    fontWeight: 800,
    lineHeight: `${LINE_HEIGHT_RATIO * 24}px`,
  },
  [FONT_STYLE_NAME.subtitle1]: {
    fontSize: 22,
    fontWeight: 700,
    lineHeight: `${LINE_HEIGHT_RATIO * 22}px`,
  },
  [FONT_STYLE_NAME.subtitle2B]: {
    fontSize: 20,
    fontWeight: 700,
    lineHeight: `${LINE_HEIGHT_RATIO * 20}px`,
  },
  [FONT_STYLE_NAME.subtitle2R]: {
    fontSize: 20,
    fontWeight: 400,
    lineHeight: `${LINE_HEIGHT_RATIO * 20}px`,
  },
  [FONT_STYLE_NAME.subtitle3]: {
    fontSize: 17,
    fontWeight: 700,
    lineHeight: `${LINE_HEIGHT_RATIO * 17}px`,
  },
  [FONT_STYLE_NAME.body1B]: {
    fontSize: 18,
    fontWeight: 600,
    lineHeight: `${LINE_HEIGHT_RATIO * 18}px`,
  },
  [FONT_STYLE_NAME.body1R]: {
    fontSize: 18,
    fontWeight: 400,
    lineHeight: `${LINE_HEIGHT_RATIO * 18}px`,
  },
  [FONT_STYLE_NAME.body2B]: {
    fontSize: 15,
    fontWeight: 600,
    lineHeight: `${LINE_HEIGHT_RATIO * 15}px`,
  },
  [FONT_STYLE_NAME.body2R]: {
    fontSize: 15,
    fontWeight: 400,
    lineHeight: `${LINE_HEIGHT_RATIO * 15}px`,
  },
  [FONT_STYLE_NAME.body3]: {
    fontSize: 13,
    fontWeight: 400,
    lineHeight: `${LINE_HEIGHT_RATIO * 13}px`,
  },
  [FONT_STYLE_NAME.caption]: {
    fontSize: 13,
    fontWeight: 300,
    lineHeight: `${LINE_HEIGHT_RATIO * 13}px`,
  },
};
