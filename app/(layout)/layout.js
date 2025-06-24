import Head from "next/head";
import "@/app/components/00_utilities/globals.scss";
import {Navigation} from "@/app/components/03_organisms/Navigation/Navigation";
import {Footer} from "@/app/components/03_organisms/Footer/Footer";
import localFont from "next/font/local";

const libreFranklin = localFont({
    variable: '--font-libre-franklin',
    src: '../../public/fonts/LibreFranklin.ttf',
    subsets: ["latin"],
})

const inter = localFont({
    variable: '--font-inter',
    src: '../../public/fonts/Inter.ttf',
    subsets: ["latin"],
})

export const metadata = {
    title: "Marion Dimbath | Posaune",
    description: "Professionelle Posaunistin für Jazz, Konzerte & Unterricht in München.",
    metadataBase: new URL("https://www.mariondimbath.de"),
    openGraph: {
        siteName: "Marion Dimbath | Posaune",
        type: "website",
        locale: "de_DE",
        url: "https://www.mariondimbath.de",
        description: "Professionelle Posaunistin für Jazz, Konzerte & Unterricht in München.",
        images: [
            {
                url: "https://www.mariondimbath.de/img/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "Marion Dimbath mit Posaune"
            }
        ]
    },
    robots: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
        googleBot: "index, follow"
    },
    icons: {
        icon: '../favicon.ico'
    },
    alternates: {
        canonical: "https://www.mariondimbath.de"
    }
};

export default function RootLayout({children}){
  return (
      <>
          <Head>
              <title>Marion Dimbath | Posaune</title>
              <link rel="canonical" href="https://marion-dimbath.netlify.app"/>
              <meta name="apple-mobile-web-app-title" content="MyWebSite"/>
              <link rel="apple-touch-icon" href="../favicon.ico"></link>
          </Head>
        <body className={`${inter.variable} ${libreFranklin.variable} `}>
            <header>
                <Navigation/>
            </header>
            {children}
            <footer>
                <Footer/>
            </footer>
        </body>
      </>
  )
}
