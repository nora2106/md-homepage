import style from "./menubutton.module.scss";
import { IoClose } from "react-icons/io5";

export const MenuButton = (props) => {
    return (
        <button onClick={props.action} className={` ${style.button} ${props.close ? style.closeButton : ''} ${props.open ? style.open : ''}`}>
            {
                props.close ?
                <IoClose/>
                    :
                <span>Menü</span>
            }
        </button>
    );
};

export default MenuButton;