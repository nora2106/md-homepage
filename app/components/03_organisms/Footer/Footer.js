import styles from "./footer.module.scss"
import Link from "next/link";
import { FaAt } from "react-icons/fa6";
import {getSettings} from "@/sanity/sanity-query";
import AnimatedNote from "@/app/components/01_atoms/AnimatedNote/AnimatedNote";

export const Footer = async () => {
    const pageContent = await getSettings();
    const data = pageContent[0];

    return <div className={styles.container}>
        <div className={styles.mailIcon}>
            <FaAt/>
        </div>
        <div className={styles.footerContent}>
            <div className={styles.contactField}>
                <p className={styles.contactText}>Kontaktiere mich unter: </p>
                <a className={styles.mail} href={'mailto:' + data.email}>{data.email}</a>
            </div>
            <div className={styles.text}>
                {/*@todo dynamic year*/}
                <p>2025, alle Rechte vorbehalten.</p>
                <Link href="/impressum">Impressum</Link>
                <p>Webseite erstellt von <a href={data.footer_link ? data.footer_link : "/"}>Nora Klinger</a></p>
            </div>
            <a className={styles.attribution} href="https://www.vecteezy.com/free-vector/illustration">Illustration Vectors by Vecteezy</a>
            <AnimatedNote/>
        </div>
    </div>
};

export default Footer;
