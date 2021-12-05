import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  return <nav>
    {links.map((link) => {
      const linkRef = `#${link}`;
      return <a href={linkRef} key={link}>{link}</a>;
    })}
  </nav>;
}

export default NavBar;
