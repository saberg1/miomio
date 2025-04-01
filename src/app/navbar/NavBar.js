import React from "react";
import styles from "./navbar.module.css";
import Link from "next/link";

const NavBar = () => {

    const Links = [
        { href: "/", text: "Home" },
        { href: "/booking", text: "Book Now" },
        { href: "/resort-details", text: "Resort Details" },
        { href: "/about", text: "About" },
        { href: "/contact-us", text: "Contact Us" }
    ];

    return (
        <div className={styles.navbar_div_container}>
            <nav className={styles.navbar_container}>
                <ul className={styles.navbar_ul}>
                    {Links.map((link) => (
                        <li className={styles.navbar_li} key={link.href}>
                            <Link href={link.href}>
                                {link.text}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    )
};

export default NavBar;