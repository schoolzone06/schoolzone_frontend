const Bold = 700;
const SemiBold = 600;
const Medium = 500;

const fontGenerator = (
  fontWeight: number,
  fontSize: number,
  lineHeight: number,
  letterSpacing: number,
) => {
  return {
    fontWeight,
    fontSize: `${fontSize}px`,
    lineHeight: `${lineHeight}px`,
    letterSpacing: `${letterSpacing}%`,
  };
};

const font = {
  Display1: fontGenerator(Bold, 40, 52, -0.6),
  Display2: fontGenerator(Bold, 36, 46, -0.6),
  Display3: fontGenerator(Bold, 32, 42, 0),
  Display4: fontGenerator(Bold, 28, 38, -0.6),
  Display5: fontGenerator(Bold, 24, 34, -0.6),
  Headline: fontGenerator(Bold, 20, 28, -0.6),

  Subhead1: fontGenerator(Bold, 16, 22, 0),
  Subhead2: fontGenerator(Bold, 14, 20, 0),
  Subhead3: fontGenerator(Bold, 12, 18, 0),

  Body1: fontGenerator(Medium, 16, 24, 0),
  Body2: fontGenerator(Medium, 14, 20, 0),
  Caption: fontGenerator(Medium, 12, 18, 0),

  Button: fontGenerator(SemiBold, 16, 19, 0),
};

export default font;
