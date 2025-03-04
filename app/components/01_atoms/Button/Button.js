import styles from "./button.module.scss"
import { FaArrowRight } from "react-icons/fa6";
import Link from "next/link";

export const Button = (props) => {
    return (
        (
            props.slug ?
                <Link className={styles.buttonWrapper} href={props.slug}>
                    <button className={` ${styles.button} ${props.secondary ? styles.secondary : ''}`}>
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