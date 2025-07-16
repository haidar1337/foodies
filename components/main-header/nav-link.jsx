"use client";

import { usePathname } from "next/navigation";
import styles from "./nav-link.module.css";
import Link from "next/link";

export default function NavLink({ href, children }) {
  const path = usePathname();
  return (
    <li>
      <Link
        href={href}
        className={
          path.startsWith(href)
            ? `${styles.link} ${styles.active}`
            : styles.link
        }
      >
        {children}
      </Link>
    </li>
  );
}
