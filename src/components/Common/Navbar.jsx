import Image from "next/image";
import Link from "next/link";
import React from "react";
import imgLogo from "../../assets/images/logo.svg";

const Navbar = () => {
  return (
    <nav>
    <div className="container mx-auto py-6">
    <div className="flex justify-between items-center">
        <div>
        
            <Image src={imgLogo} width={60} height={60} />
        </div>
        <div>
          <ul className="flex gap-6">
            <Link href="/projects">Projects</Link>
            <li>Contacts</li>
            <li>About</li>
          </ul>
        </div>
      </div>
    </div>
    </nav>
  );
};

export default Navbar;
