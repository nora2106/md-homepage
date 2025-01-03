import Link from "next/link";

export const MenuItem = (props) => {
    return (
        <li className='h-fit'>
            <Link href={props.url}>
                <span className=''>{props.text}</span>
            </Link>
        </li>
    );
};

export default MenuItem;