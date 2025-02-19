"use client";
import { useRouter } from "next/navigation";
import navStyles from "./navpanel.module.css";
import contactStyles from "./contact.module.css";

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
                onClick={() => handleClick("/about")}
              >
                about
              </div>
            </div>
            <div className={contactStyles.contactDetailTwo}>
              <div
                className={contactStyles.contactLinkTwo}
                onClick={() => handleClick("/featured")}
              >
                featured work
              </div>
            </div>
            <div className={contactStyles.contactDetailThree}>
              <div
                className={contactStyles.navLinkThree}
                onClick={() => handleClick("/contact")}
              >
                contact
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
