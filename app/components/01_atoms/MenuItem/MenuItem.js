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
        <Link href={props.url} className={` ${styles.item} ${active ? styles.active : ''}`}>
            <li>
                    <span className=''>{props.text}</span>
            </li>
        </Link>
    );
};

export default MenuItem;