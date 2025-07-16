import styles from "./main-header.module.css";
import Image from "next/image";

import logoImage from "@/assets/logo.png";
import MainBackground from "./main-background";
import NavLink from "./nav-link";
import Link from "next/link";

export default function MainHeader() {
  return (
    <>
      <MainBackground />
      <header className={styles.header}>
        <Link className={styles.logo} href="/">
          <Image src={logoImage} alt="A plate with food" priority />
          Next Food
        </Link>
        <nav className={styles.nav}>
          <ul>
            <NavLink href="/meals">Browse Meals</NavLink>
            <NavLink href="/community">Foodies Community</NavLink>
          </ul>
        </nav>
      </header>
    </>
  );
}
