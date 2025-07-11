import styles from "./button.module.scss"
import { FaArrowRight, FaArrowLeft } from "react-icons/fa6";
import Link from "next/link";

export const Button = (props) => {
    return (
        (
            props.url ?
                <Link className={styles.buttonWrapper} href={props.url}>
                    <button className={` ${styles.button} ${props.secondary ? styles.secondary : ''}`}>
                        {props.arrowLeft ? <FaArrowLeft/> : ''}
                        {props.text}
                        {props.arrow ? <FaArrowRight/> : ''}
                    </button>
                </Link>
                :
                <a href={props.link} onClick={props.action} className={` ${styles.button} ${props.secondary ? styles.secondary : ''} button`}>
                    {props.text}
                    {props.arrow ? <FaArrowRight/> : ''}
                </a>
        )

    );
};

export default Button;
