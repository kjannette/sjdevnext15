"use client";
import { useRouter } from "next/navigation";
import headerStyles from "./component.module.css";
import { Roboto } from "next/font/google";

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
      <div className={headerStyles.headerContainer}>
        <div className={headerStyles.headerBox}>
          <div>
            {!menuOpen ? (
              <div
                onClick={() => handleClick("/")}
                className={headerStyles.nextLink}
              >
                <img
                  src="https://res.cloudinary.com/dd8ewixm7/image/upload/v1742677128/logoMedLight_hldv0e.png"
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
                onClick={() => handleClick("/appliedai")}
              >
                Applied AI
              </div>
            </div>
            <div>
              <div
                className={headerStyles.nextLink}
                onClick={() => handleClick("/webapps")}
              >
                Web Applications
              </div>
            </div>
            <div>
              <div
                className={headerStyles.nextLink}
                onClick={() => handleClick("/peitho")}
              >
                Agentic Support
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
          <div className={headerStyles.headerLoginBox}>
            <div className={headerStyles.headerLoginTextBox}>
              <div
                onClick={() => handleClick("/login")}
                className={headerStyles.headerLoginText}
              >
                Login | グイン | 登入
              </div>
            </div>
          </div>
          <p className={headerStyles.headerText}>
            S J <span className={headerStyles.colorText}> Development</span>
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
{
  /** <div className={headerStyles.headerHead}>Steven Jannette</div>*/
}
