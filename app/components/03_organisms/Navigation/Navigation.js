import MenuItem from "@/app/components/01_atoms/MenuItem/MenuItem";
import Button from "@/app/components/01_atoms/Button/Button";
import styles from "./navigation.module.scss";
import Image from "next/image";
import MenuList from "@/app/components/01_atoms/MenuList/MenuList";
import MobileNavigation from "@/app/components/02_molecules/MobileNavigation/MobileNavigation";

export const Navigation = () => {
    return (
        <div id='header' className={styles.wrapper}>
            <nav className={styles.navigation}>
                <div className={styles.desktop}>
                    <MenuList/>
                </div>
                <MobileNavigation/>
            </nav>
        </div>
    );
};

export default Navigation;