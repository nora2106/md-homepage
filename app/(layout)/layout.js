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
    metadataBase: new URL("https://marion-dimbath.netlify.app"),
    openGraph: {
        siteName: "Marion Dimbath | Posaune",
        type: "website",
        locale: "de_DE"
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
    }
};

export default function RootLayout({children}){
  return (
      <>
          <Head>
              <title>Marion Dimbath | Posaune</title>
              <link rel="canonical" href="https://marion-dimbath.netlify.app"/>
              <meta name="apple-mobile-web-app-title" content="MyWebSite"/>
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
