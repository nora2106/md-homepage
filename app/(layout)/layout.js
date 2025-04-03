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
    metadataBase: new URL("https://marion-dimbath.netlify.app"),
    openGraph: {
        siteName: "Blog | Minh Vu",
        type: "website",
        locale: "en_US"
    },
    robots: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
        googleBot: "index, follow"
    },
};

export default function RootLayout({children}){
  return (
      <>
          <Head>
              <title>Marion Dimbath | Jazzposaune</title>
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
