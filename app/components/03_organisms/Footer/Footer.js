"use client"
import styles from "./footer.module.scss"
import Link from "next/link";
import {FaAt} from "react-icons/fa6";
import {getSettings} from "@/sanity/sanity-query";
import AnimatedNote from "@/app/components/01_atoms/AnimatedNote/AnimatedNote";
import {motion, useMotionValueEvent, useScroll, useTransform} from "motion/react";
import {useEffect, useRef, useState} from "react";
import {usePathname} from "next/navigation";

export const Footer = () => {
    const [data, setData] = useState(null)
    let d = new Date();
    const year = d.getFullYear().toString();
    const pathname = usePathname();

    useEffect(() => {
        async function getData() {
            const pageContent = await getSettings();
            setData(pageContent[0]);
        }

        getData();
    }, []);

    return <div className={styles.wrapper}>
        <div key={pathname} className={styles.container}>
            <div className={styles.mailIcon}>
                <FaAt/>
            </div>
            {data ?
                <div className={styles.footerContent}>
                    <div className={styles.contactField}>
                        <p className={styles.contactText}>Kontaktiere mich unter: </p>
                        <a className={styles.mail} href={'mailto:' + data.email}>{data.email}</a>
                    </div>
                    <div className={styles.text}>
                        <p>© {year}, alle Rechte vorbehalten.</p>
                        <Link href="/impressum">Impressum</Link>
                        <p>Webseite erstellt von <a href={data.footer_link ? data.footer_link : "/"}>Nora Klinger</a>
                        </p>
                    </div>
                    <a className={styles.attribution} href="https://www.vecteezy.com/free-vector/illustration">Illustration
                        Vectors by Vecteezy</a>
                    <AnimatedNote/>
                </div>
                : <div/>
            }
        </div>
    </div>
};

export default Footer;
