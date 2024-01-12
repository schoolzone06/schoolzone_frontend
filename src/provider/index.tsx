"use client";

import MuiThemeProvider from "./MuiThemeProvider";
import globalCss from "@/styles/globalCss";
import { Global } from "@emotion/react";
import { Provider } from "jotai";

const MainProvider = ({ children }: React.PropsWithChildren) => {
  return (
    <Provider>
      <MuiThemeProvider>
        <Global styles={globalCss} />
        {children}
      </MuiThemeProvider>
    </Provider>
  );
};

export default MainProvider;
