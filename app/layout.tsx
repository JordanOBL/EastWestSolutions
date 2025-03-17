import "./globals.css";

import { Averia_Serif_Libre, Geist, Geist_Mono, Poppins } from "next/font/google";

import type { Metadata } from "next";
import NavBar from "./NavBar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const averia = Averia_Serif_Libre({
  variable: "--font-averia",
  subsets: ["latin"],
  weight: ["300", "400", "700"], 
  display: "swap"
})

const poppins = Poppins({
	variable: '--font-poppins',
	subsets: ['latin'],
	weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
	display: 'swap',
});


export const metadata: Metadata = {
  title: "East West Solutions",
  description: "As EastWest Solutions, my mission is to help businesses and professionals thrive by creating clear, actionable plans that make sense.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
		<html lang="en">
			<body
			  className={`${averia.variable} ${poppins.variable} antialiased`}>
			  <NavBar />
				{children}
			</body>
		</html>
  );
}
