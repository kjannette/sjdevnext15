"use client";
import { useRouter } from "next/navigation";
import headerStyles from "./component.module.css";
import { Roboto } from "next/font/google";
import Script from "next/script";

const roboto = Roboto({
  display: "swap",
  variable: "--font-roboto",
  weight: ["100", "300", "400", "500"],
  subsets: ["latin"],
});

export default function Header(props) {
  const { menuOpen, navToggle } = props;
  const router = useRouter();

  const handleClick = (route) => {
    router.push(route);
  };

  return (
    <main className={roboto.variable}>
      <img src="https://sjdev.goatcounter.com/count?p=/test" />
      <div className={headerStyles.headerContainer}>
        <div className={headerStyles.headerBox}>
          <div>
            {!menuOpen ? (
              <div
                onClick={() => handleClick("/")}
                className={headerStyles.nextLink}
              >
                <img
                  src="https://res.cloudinary.com/dd8ewixm7/image/upload/v1739937348/logo_u7dxox.png"
                  height={110}
                  alt="s.j. dev logo"
                />
              </div>
            ) : (
              <></>
            )}
          </div>
          <div className={headerStyles.linksRow}>
            <div>
              <div
                className={headerStyles.nextLink}
                onClick={() => handleClick("/about")}
              >
                In re:
              </div>
            </div>
            <div>
              <div
                className={headerStyles.nextLink}
                onClick={() => handleClick("/featured")}
              >
                Featured Work
              </div>
            </div>
            <div>
              <div
                className={headerStyles.nextLink}
                onClick={() => handleClick("/contact")}
              >
                Contact
              </div>
            </div>
          </div>
        </div>
        <div className={headerStyles.headerBoxLeft}>
          <div className={headerStyles.headerHead}>Steven Jannette</div>
          <p className={headerStyles.headerText}>
            Se<span className={headerStyles.colorText}>q</span>u
            <span className={headerStyles.colorText}>e</span>
            ncing The F<span className={headerStyles.colorText}>u</span>ture
          </p>
        </div>
        <div className={headerStyles.burgerBox}>
          <button onClick={navToggle} className={headerStyles.burgerButton}>
            <div id="ks-menu_lines1" className={headerStyles.ksMenuLines}>
              {!menuOpen ? (
                <div className={headerStyles.menuOpen}>⊟</div>
              ) : (
                <></>
              )}
            </div>
          </button>
        </div>
      </div>
    </main>
  );
}
