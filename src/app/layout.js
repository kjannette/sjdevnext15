import Footer from "../components/footer";
import ClientNavigationWrapper from "../components/ClientNavigationWrapper";
import "./globals.css";
import { Roboto } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import { GA_MEASUREMENT_ID } from "../secrets";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  style: ["italic", "normal"],
});

export const metadata = {
  title: "SJ Development",
  description: "Innovative AI and Web Development Solutions",
  icons: {
    icon: "/crane_fav.png",
    shortcut: "/crane_fav.png",
    apple: "/crane_fav.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script
          data-goatcounter="https://sjdev.goatcounter.com/count"
          async
          src="//gc.zgo.at/count.js"
        ></script>
      </head>
      <body className={`${roboto.variable}`}>
        <ClientNavigationWrapper>
          {children}
        </ClientNavigationWrapper>
        <Footer />
        <GoogleAnalytics gaId={GA_MEASUREMENT_ID} />
      </body>
    </html>
  );
}
