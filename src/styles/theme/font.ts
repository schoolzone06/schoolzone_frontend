const Bold = 700;
const SemiBold = 600;
const Medium = 500;

const fontGenerator = (
  weight: number,
  size: number,
  lineHeight: number,
  letterSpacing: number,
) => `
      font-weight: ${weight};
      font-size: ${size}px;
      line-height: ${lineHeight}%;
      letter-spacing: ${letterSpacing}%;
      `;

export const font = {
  Display5: fontGenerator(Bold, 40, 52, -0.6),
  Display4: fontGenerator(Bold, 36, 46, -0.6),
  Display3: fontGenerator(Bold, 32, 42, 0),
  Display2: fontGenerator(Bold, 28, 38, -0.6),
  Display1: fontGenerator(Bold, 24, 34, -0.6),

  Headline: fontGenerator(Bold, 20, 28, -0.6),
  Subhead3: fontGenerator(Bold, 16, 22, 0),
  Subhead2: fontGenerator(Bold, 14, 20, 0),
  Subhead1: fontGenerator(Bold, 12, 18, 0),
  SubheadLong3: fontGenerator(Bold, 16, 28, 0),
  SubheadLong2: fontGenerator(Bold, 16, 24, 0),

  Body2: fontGenerator(Medium, 16, 24, 0),
  Body1: fontGenerator(Medium, 14, 20, 0),
  BodyLong2: fontGenerator(Medium, 16, 28, 0),
  BodyLong1: fontGenerator(Medium, 14, 24, 0),
  Caption: fontGenerator(Medium, 12, 18, 0),

  Button1: fontGenerator(SemiBold, 24, 120, 0),
  Button2: fontGenerator(SemiBold, 20, 120, 0),
  Button3: fontGenerator(SemiBold, 16, 120, 0),
};
