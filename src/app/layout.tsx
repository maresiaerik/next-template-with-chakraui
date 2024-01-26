"use-client";

import { ReactElement } from "react";

import NonSSRWrapper from "@/components/NonSSRWrapper";

import ParentProvider from "./providers";

export default function RootLayout({ children }: { children: React.ReactNode }): ReactElement {
  return (
    <html lang="en">
      <body>
        <NonSSRWrapper>
          <ParentProvider>{children}</ParentProvider>
        </NonSSRWrapper>
      </body>
    </html>
  );
}
