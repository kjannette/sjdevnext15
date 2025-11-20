"use client";
import { useRouter } from "next/navigation";
import navStyles from "./navpanel.module.css";
import contactStyles from "./foo.module.css";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  style: ["italic", "normal"],
});

export default function Navpanel(props) {
  const { menuOpen, setMenuOpen, navToggle } = props;

  const router = useRouter();

  const handleClick = (route) => {
    router.push(route);
    setMenuOpen(!menuOpen);
  };

  const mobileMainHeadingClass = menuOpen
    ? navStyles.mobileMainHeadingShow
    : navStyles.mobileMainHeadingHide;

  const mobileHeadingWrapperClass = menuOpen
    ? navStyles.mobileHeadingWrapperShow
    : navStyles.mobileHeadingWrapperHide;

  return (
    <div className={mobileMainHeadingClass}>
      <div className={mobileHeadingWrapperClass}>
        <div className={navStyles.mobileHeadingClose}>
          <div className={navStyles.mobileHeadingCloseInner}>
            <a className={navStyles.mobileHeadingButton} onClick={navToggle}>
              ⊟
            </a>
          </div>
        </div>
        <div className={navStyles.mobileHeadingLinkWrap}>
          <div className={navStyles.mobileInfoBox}>
            <div className={contactStyles.contactDetailOne}>
              <div
                className={contactStyles.contactLink}
                onClick={() => handleClick("/appliedai")}
              >
                Applied AI
              </div>
            </div>
            <div className={contactStyles.contactDetailTwo}>
              <div
                className={contactStyles.contactLinkTwo}
                onClick={() => handleClick("/webapps")}
              >
                Web Applications
              </div>
            </div>
            <div className={contactStyles.contactDetailThree}>
              <div
                className={contactStyles.navLinkThree}
              
              >
                Blog
              </div>
            </div>
            <div className={contactStyles.contactDetailFour}>
              <div
                className={contactStyles.navLinkFour}
                onClick={() => handleClick("/contact")}
              >
                Contact
              </div>
            </div>
            <div className={contactStyles.contactDetailFive}>
              <div
                className={contactStyles.navLinkFive}
                onClick={() => handleClick("/peitho")}
              >
                Agentic Tech
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
