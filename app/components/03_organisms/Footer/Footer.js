"use client"
import styles from "./footer.module.scss"
import Link from "next/link";
import {FaAt} from "react-icons/fa6";
import {getSettings} from "@/sanity/sanity-query";
import AnimatedNote from "@/app/components/01_atoms/AnimatedNote/AnimatedNote";
import {motion, useMotionValueEvent, useScroll, useTransform} from "motion/react";
import {useEffect, useRef, useState} from "react";

export const Footer = () => {
    const [data, setData] = useState(null)
    const [scrollHeight, setScrollHeight] = useState("90%");
    const target = useRef(null);
    let d = new Date();
    const year = d.getFullYear().toString();

    useEffect( () => {
        async function getData() {
            const pageContent = await getSettings();
            setData(pageContent[0]);
        }
        getData();
    }, []);

    const {scrollYProgress} = useScroll({
        target,
        offset: ['start end', 'end start'],
    });
    let parallax = useTransform(scrollYProgress, [0, 1], [0, 100]);
    useMotionValueEvent(parallax, 'change', (v) => {
            setScrollHeight(-1 * v.toFixed(2) + "%")
        }
    );

    return <div ref={target} className={styles.wrapper}>
        <motion.div initial={{y: "80%"}} whileInView={{y: "0"}} viewport={{once: true}} transition={{ease: "linear", duration: .6}} className={styles.container}>
            <div className={styles.mailIcon}>
                <FaAt/>
            </div>
            {data ?
                <div  className={styles.footerContent}>
                    <div className={styles.contactField}>
                        <p className={styles.contactText}>Kontaktiere mich unter: </p>
                        <a className={styles.mail} href={'mailto:' + data.email}>{data.email}</a>
                    </div>
                    <div className={styles.text}>
                        {/*@todo dynamic year*/}
                        <p>© {year}, alle Rechte vorbehalten.</p>
                        <Link href="/impressum">Impressum</Link>
                        <p>Webseite erstellt von <a href={data.footer_link ? data.footer_link : "/"}>Nora Klinger</a></p>
                    </div>
                    <a className={styles.attribution} href="https://www.vecteezy.com/free-vector/illustration">Illustration
                        Vectors by Vecteezy</a>
                    <AnimatedNote/>
                </div>
                : <div/>
            }
        </motion.div>
    </div>
};

export default Footer;
