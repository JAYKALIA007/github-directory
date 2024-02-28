import Link from "next/link";
import React from "react";
const Header = () => {
  return (
    <header className="text-lg font-medium underline">
      <div className="flex gap-x-2">
        <Link href={"/about"}>About</Link>
        <Link href={"/about/team"}>Team</Link>
        <Link href={"/repos"}>Repos</Link>
      </div>
    </header>
  );
};

export default Header;
