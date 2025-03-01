"use client"
import Link from "next/link";
import styles from "./menuitem.module.scss";
import {useEffect, useState} from "react";
import {usePathname} from "next/navigation";

export const MenuItem = (props) => {
    const [active, setActive] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        setActive(false);
        if(pathname === props.url) {
            setActive(true);
        }
    }, [pathname]);
    return (
        <li className={` ${styles.item} ${active ? styles.active : ''}`}>
            <Link href={props.url}>
                <span className=''>{props.text}</span>
            </Link>
        </li>
    );
};

export default MenuItem;