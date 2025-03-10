"use client"
import style from "./project.module.scss";
import Button from "@/app/components/01_atoms/Button/Button";
import shape1 from "@/public/img/shape1.svg"
import shape2 from "@/public/img/shape2.svg"
import shape3 from "@/public/img/shape3.svg"
import {usePathname} from "next/navigation";
import {useState} from "react";

export const Project = (props) => {
    const shapes = [shape1, shape2, shape3];
    const letter = props.data.name.slice(0, 1);
    const currentURl = usePathname();
    const selectedShape = useState(shapes[props.index % shapes.length])

    return (
        <div className={style.wrapper}>
            <div className={style.container}>
                <p>{props.key}</p>
                <h2 className={style.headline}>{props.data.name}</h2>
                <div className={style.shapeContainer}>
                    <span className={style.letter}>{letter}</span>
                    <div className={style.shape}>{selectedShape}</div>
                </div>
                <Button text="Anschauen" slug={currentURl + "/" + props.data.slug.current} arrow={true}/>
            </div>
        </div>
    );
};

export default Project;
