import MenuItem from "@/app/components/01_atoms/MenuItem/MenuItem";
import Button from "@/app/components/01_atoms/Button/Button";
import styles from "./navigation.module.scss";

export const Navigation = () => {
    return (
        <div id='header' className={styles.wrapper}>
            <nav className={styles.navigation}>
                <ul className={styles.list}>
                    <MenuItem url='/' text='Homepage'/>
                    <MenuItem url='/projekte' text='Projekte'/>
                </ul>
                <Button text='Kontakt'/>
            </nav>
        </div>
    );
};

export default Navigation;