import type { Metadata } from "next";
import localFont from "next/font/local";

import { SmoothScrollProvider } from '@/app/providers/smooth-scroll-provider';
import { Header } from '@/widgets/header/ui/header/Header';

import "./globals.scss";

const pretendard = localFont({
  src: "../src/shared/assets/fonts/PretendardVariable.woff2",
  display: "swap",
  variable: "--pretendard",
});

const cabinetGrotesk = localFont({
  src: "../src/shared/assets/fonts/CabinetGrotesk.ttf",
  display: "swap",
  variable: "--cabinet-grotesk",
});

export const metadata: Metadata = {
  title: "engineer.hs - building digital solution.",
  description: "hyunsoo kim portfolio.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="ko"
      className={`
        ${pretendard.variable}
        ${cabinetGrotesk.variable}
      `}
    >
      <body>
        <SmoothScrollProvider>
          <Header />
          {children}
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
