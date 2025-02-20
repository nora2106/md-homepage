"use client"
import style from "./project.module.scss";
import Button from "@/app/components/01_atoms/Button/Button";
import shape1 from "@/public/img/shape1.svg"
import shape2 from "@/public/img/shape2.svg"
import shape3 from "@/public/img/shape3.svg"
import Image from 'next/image';
import {usePathname} from "next/navigation";

export const Project = (props) => {
    const shapes = [shape1, shape2, shape3];
    const letter = props.data.name.slice(0, 1);
    const currentURl = usePathname();
    //@todo maybe assign random shape in backend?
    function getRandomShape() {
        let randomNum = Math.floor(Math.random() * (3 - 1 + 1) + 1);
        return shapes[randomNum - 1].src;
    }

    return (
        <div className={style.wrapper}>
            <div className={style.container}>
                <h2 className={style.headline}>{props.data.name}</h2>
                <div className={style.shapeContainer}>
                    <span className={style.letter}>{letter}</span>
                    <Image className={style.shape} width="300" height="300" src={shape1} alt=""/>
                </div>
                {/*<p>{props.data.description}</p>*/}
                <Button text="Anschauen" slug={currentURl + "/" + props.data.slug.current} arrow={true}/>
            </div>
        </div>
    );
};

export default Project;