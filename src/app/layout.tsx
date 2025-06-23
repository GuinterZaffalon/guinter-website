import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Montserrat } from 'next/font/google'
import { ViewTransitions } from 'next-view-transitions'
import Nav from "@/components/nav";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const geistLewis = localFont({
  src: "./fonts/LEWIS.woff",
  variable: "--font-geist-lewis",
  weight: "100 900",
})

const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Guinter Zaffalon',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ViewTransitions>
      <html suppressHydrationWarning lang="en">
        <body className={montserrat.className}>
          <ThemeProvider attribute="class" disableTransitionOnChange>
            <Nav />
            <div className="text-foreground mx-auto w-[750px] max-w-full px-5 pt-28 pb-10">
              {children}
            </div>
          </ThemeProvider>
        </body>
      </html>
    </ViewTransitions>
  );
}
