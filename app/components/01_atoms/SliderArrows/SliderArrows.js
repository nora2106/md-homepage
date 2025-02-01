import style from "./sliderarrows.module.scss";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";

export const SliderArrows = (props) => {
    return (
        <div className={style.container}>
            <IoIosArrowBack onClick={props.decrease} className={props.backActive ? `${style.arrow} ${style.active}` : `${style.arrow}`}/>
            <IoIosArrowForward onClick={props.increase} className={props.forwardActive ? `${style.arrow} ${style.active}` : `${style.arrow}`}/>
        </div>
    );
};

export default SliderArrows;