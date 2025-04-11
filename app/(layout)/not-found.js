import RootLayout from "@/app/(layout)/layout";
import styles from "../components/06_pages/404/index.module.scss";
import Button from "@/app/components/01_atoms/Button/Button";

export default function NotFound() {
    return (
        <RootLayout>
            <main>
                <div className={styles.wrapper}>
                    <h1 className="headline-2">404</h1>
                    <h2 className="headline-3"> Seite nicht gefunden </h2>
                    <p>Ups, diese Seite scheint nicht zu existieren!</p>
                    <Button slug="/" text="Startseite" arrow={true}/>
                </div>
            </main>
        </RootLayout>

    )
}
