import { Montserrat, Open_Sans, Luckiest_Guy, Dancing_Script } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

const luckiestGuy = Luckiest_Guy({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-luckiest-guy",
  display: "swap",
});

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  variable: "--font-dancing-script",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
  display: "swap",
});

export const metadata = {
  title: "Yomarra - Social Media Agency",
  description: "Social media hoeft niet ingewikkeld te zijn om impact te maken.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="nl">
      <body className={`${montserrat.variable} ${openSans.variable} ${luckiestGuy.variable} ${dancingScript.variable}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
