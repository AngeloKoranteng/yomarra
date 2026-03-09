// Hier importeren we de lettertypes van Google Fonts
import { Montserrat, Open_Sans, Luckiest_Guy, Dancing_Script } from "next/font/google";
// We laden hier de algemene CSS in (voor bijvoorbeeld standaard achtergronden en kleuren)
import "./globals.css";
// We halen de Header (het menu bovenin) en de Footer (de onderkant) op, zodat we ze op elke pagina kunnen tonen
import Header from "../components/Header";
import Footer from "../components/Footer";

// Hieronder stellen we elk lettertype in. Zo weet de website precies hoe de tekst eruit moet zien.
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
  display: "swap", // Dit zorgt ervoor dat tekst altijd zichtbaar is, ook als het lettertype nog laadt
});

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
  display: "swap",
});

// Dit is heel belangrijk voor SEO (Google). Hiermee vertellen we zoekmachines waar de website over gaat.
export const metadata = {
  title: "Yomarra | Social Media Agency", // De titel die je bovenaan in het tabblad van je browser ziet
  description: "Bij Yomarra zorgen we ervoor dat bedrijven niet langer worstelen met hun social media. Wij nemen het werk uit handen en helpen je groeien met pakkende content, een duidelijke strategie en een uitstraling die echt bij jouw merk past.",
  keywords: ["Social Media", "Content Creatie", "Strategie", "Promotie", "Social Media Agency", "TikTok", "Instagram", "Marketing"],
  authors: [{ name: "Marvin Agyei" }],
  openGraph: {
    title: "Yomarra | Social Media Agency",
    description: "Wij laten jouw online identiteit tot leven komen met strategische en creatieve content.",
    url: "https://yomarra.nl",
    siteName: "Yomarra",
    locale: "nl_NL", // We geven aan dat dit een Nederlandse website is
    type: "website",
  },
  robots: {
    index: true, // Google mag deze website opnemen in de zoekresultaten
    follow: true, // Google mag de linkjes op deze website volgen
  }
};

// Dit is het "geraamte" van de hele website. Elke pagina wordt in deze 'RootLayout' geladen.
export default function RootLayout({ children }) {
  return (
    // We vertellen de browser dat de taal van de website Nederlands is
    <html lang="nl">
      {/* We zetten de lettertypes aan op de hele body. Daarna tonen we de Header, dan de inhoud van de pagina (children), en sluiten we af met de Footer. */}
      <body className={`${montserrat.variable} ${openSans.variable} ${luckiestGuy.variable} ${dancingScript.variable}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
