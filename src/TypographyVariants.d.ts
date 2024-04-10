declare module "@mui/material/styles" {
  import React from "react";

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
