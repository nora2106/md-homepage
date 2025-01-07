import style from "./textmedia.module.scss";
import Image from "next/image";

export const Component = (props) => {
    return (
        <div className={style.wrapper}>
            <div className={style.text}>
                <p>Text</p>
                <p>Absatz</p>
            </div>

            <div className={style.media}>
                {
                    props.image ?
                        <Image src='/img/test.jpg' width='500' height='500' alt=''/>
                        :
                        <video/>
                }
            </div>
        </div>
    );
};

export default Component;