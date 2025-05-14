import type { Metadata, Viewport } from "next";
import { TailwindIndicator } from "@/components/tailwind-indicator";
import { Toaster } from "@/components/ui/sonner";
import { VercelAnalytics } from "@/lib/analytics/vercel";
import { geistMono, geistSans } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import { Providers } from "@/providers/providers";
import { ClerkProvider } from "@clerk/nextjs";

import "./globals.css";

export const metadata: Metadata = {
  title: "Combat Films",
  description: "Combat Films - Historical Combat Documentary Films and Resources",
  icons: {
    icon: [
      { url: "/cf_favicon.ico" },
      { url: "/cf_logo.webp", type: "image/webp" },
    ],
  },
};
interface RootLayoutProps {
  children: React.ReactNode;
}

export const viewport: Viewport = {
  colorScheme: "dark light",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "black" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <ClerkProvider>
      <html suppressHydrationWarning lang="en">
        <head>{/* <GoogleAnalytics gaId="G-2L23D2FV55" /> */}</head>

        <body
          className={cn(
            "min-h-screen font-sans antialiased bg-gradient-to-b from-black via-sky-900 via-30% to-black to-90%",
            geistMono.variable,
            geistSans.variable,
          )}
        >
          <Providers attribute="class" defaultTheme="system" enableSystem>
            {children}
            <TailwindIndicator />
            <Toaster />
          </Providers>
          <VercelAnalytics />
        </body>
      </html>
    </ClerkProvider>
  );
}
