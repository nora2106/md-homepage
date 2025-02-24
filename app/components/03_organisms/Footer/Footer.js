import styles from "./footer.module.scss"
import Link from "next/link";
import { FaAt } from "react-icons/fa6";

export const Footer = () => {
    return <div className={styles.container}>
        <div className={styles.mailIcon}>
            <FaAt/>
        </div>
        <div className={styles.footerContent}>
            <div className={styles.contactField}>
                <p className={styles.contactText}>Kontaktiere mich unter: </p>
                <a className={styles.mail} href=''>marion@triorange.de</a>
            </div>
            <div className={styles.text}>
                <p>2025, alle Rechte vorbehalten.</p>
                <Link href="/impressum">Impressum</Link>
                <p>Webseite erstellt von <a href="/">Nora Klinger</a></p>
            </div>
        </div>

    </div>
};

export default Footer;