import { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ríchartistique | Audemars Piguet Royal Oak",
  description: "Audemars Piguet Royal Oak Replica by MJ Ríchards.",
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <html lang="en">
        <body
          className={`$antialiased`}
        >
          {children}
        </body>
      </html>
    </>
  );
}
