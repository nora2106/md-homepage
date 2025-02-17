import style from "./menubutton.module.scss";

export const MenuButton = (props) => {
    return (
        <button onClick={props.action} className={` ${style.button} ${props.close ? style.closeButton : ''} ${props.open ? style.open : ''}`}>
            {
                props.type === 'close' ?
                <p>X</p>
                    :
                <span>Menü</span>
            }
        </button>
    );
};

export default MenuButton;