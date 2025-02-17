import style from "./menulist.module.scss";
import styles from "@/app/components/03_organisms/Navigation/navigation.module.scss";
import MenuItem from "@/app/components/01_atoms/MenuItem/MenuItem";
import Button from "@/app/components/01_atoms/Button/Button";

export const Component = () => {
    return (
        <ul className={styles.list}>
            <MenuItem url='/' text='Homepage'/>
            <MenuItem url='/projekte' text='Projekte'/>
            <MenuItem url='/unterricht' text='Unterricht'/>
            <Button text='Kontakt'/>
        </ul>
    );
};

export default Component;