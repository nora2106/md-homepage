import style from "./menulist.module.scss";
import MenuItem from "@/app/components/01_atoms/MenuItem/MenuItem";
import Button from "@/app/components/01_atoms/Button/Button";

export const Component = () => {
    return (
        <ul className={style.list}>
            <MenuItem url='/' text='Homepage'/>
            <MenuItem url='/projekte' text='Projekte'/>
            <MenuItem url='/galerie' text='Bildergalerie'/>
            <MenuItem url='/unterricht' text='Unterricht'/>
            <Button text='Kontakt'/>
        </ul>
    );
};

export default Component;
