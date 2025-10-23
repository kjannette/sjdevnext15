"use client";

import { useState } from "react";
import Header from "./header";
import Navpanel from "./navpanel";

export default function ClientNavigationWrapper({ children }) {
  const [menuOpen, setMenuOpen] = useState(false);
  
  function navToggle() {
    setMenuOpen(!menuOpen);
  }

  return (
    <>
      <Header
        navToggle={navToggle}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
      />
      <Navpanel
        navToggle={navToggle}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
      />
      {children}
    </>
  );
}

