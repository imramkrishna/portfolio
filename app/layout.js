import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Ram Krishna - Software Engineer",
  description: "Full Stack Developer specializing in MERN stack and Next.js",
  metadataBase: new URL('https://ramkrishnacode.tech'), // Replace with your actual domain when deployed
  icons: {
    icon: './profile.svg',
    shortcut: './profile.svg',
    apple: './profile.svg',
    other: [
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        url: './profile.svg',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        url: './profile.svg',
      },
    ],
  },
  openGraph: {
    title: 'Ram Krishna - Software Engineer',
    description: 'Full Stack Developer based in Nepal',
    url: 'https://ramkrishnacode.tech', // Replace with your actual domain when deployed
    siteName: 'Ram Krishna Portfolio',
    images: [
      {
        url: './profile.svg', // Create a social media preview image
        width: 1200,
        height: 630,
        alt: 'Ram Krishna - Software Engineer',
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
