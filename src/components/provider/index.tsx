"use client";
import GlobalStyle from "@/styles/theme/global";
import React from "react";
import { RecoilRoot } from "recoil";

interface ProviderAttribute {
  children: React.ReactNode;
}

const Provider = ({ children }: ProviderAttribute) => {
  return (
    <RecoilRoot>
      <GlobalStyle />
      {children}
    </RecoilRoot>
  );
};

export default Provider;
