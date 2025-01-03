import { Geist, Geist_Mono } from "next/font/google";
import Head from "next/head";
import "./globals.css";
import {Navigation} from "./components/03_organisms/Navigation";
import {Footer} from "./components/03_organisms/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

//@todo replace metadata
export const metadata = {
  title: "Marion Dimbath",
  description: "Generated by create next app",
};
export default function RootLayout({children}){
  return (
      <html lang="en">
          <Head>
              <title>Marion Dimbath</title>
              <meta charSet="UTF-8"/>
              <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
              <meta name="description" content="Your page description goes here"/>
              <link rel="canonical" href="https://yourwebsite.com/page-url"/>
          </Head>
        <body>
            <header>
                <Navigation/>
            </header>
            <main>
                {children}
            </main>
            <footer>
                <Footer/>
            </footer>
        </body>
      </html>
  )
}
