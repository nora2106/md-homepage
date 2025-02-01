import styles from "./button.module.scss"
import { FaArrowRight } from "react-icons/fa6";

export const Button = (props) => {
    return (
        <button className={` ${styles.button} ${props.secondary ? styles.secondary : ''}`}>
            {props.text}
            {props.arrow ? <FaArrowRight/> : ''}
        </button>
    );
};

export default Button;