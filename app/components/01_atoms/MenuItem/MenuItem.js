import Link from "next/link";
import style from "./menuitem.module.scss";

export const MenuItem = (props) => {
    return (
        <li className={style.item}>
            <Link href={props.url}>
                <span className=''>{props.text}</span>
            </Link>
        </li>
    );
};

export default MenuItem;