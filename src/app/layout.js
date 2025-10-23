import Footer from "../components/footer";
import ClientNavigationWrapper from "../components/ClientNavigationWrapper";
import "./globals.css";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  style: ["italic", "normal"],
});

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
      </body>
    </html>
  );
}
