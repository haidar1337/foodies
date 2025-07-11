import Link from "next/link";
import styles from "./main-header.module.css";
import Image from "next/image";

import logoImage from "@/assets/logo.png";
import MainBackground from "./main-background";

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
            <li>
              <Link href="/meals">Browse Meals</Link>
            </li>
            <li>
              <Link href="/community">Foodies Community</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
