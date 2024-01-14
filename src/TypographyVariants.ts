import React from "react";

declare module "@mui/material/styles" {
  interface TypographyVariants {
    subtitle3: React.CSSProperties;
  }

  interface TypographyVariantsOptions {
    subtitle3?: React.CSSProperties;
  }
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    subtitle3: true;
  }
}
