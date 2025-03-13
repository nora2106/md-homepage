"use client"
import style from "./project.module.scss";
import Button from "@/app/components/01_atoms/Button/Button";
import Shape1 from "@/public/img/shape1.svg"
import Shape2 from "@/public/img/shape2.svg"
import Shape3 from "@/public/img/shape3.svg"
import {usePathname} from "next/navigation";
import {useState} from "react";

export const Project = (props) => {
    const letter = props.data.name.slice(0, 1);
    const currentURl = usePathname();
    const shapes = [Shape1, Shape2, Shape3];
    const [selectedShape, setSelectedShape] = useState(shapes[props.index % shapes.length]);

    return (
        <div className={style.wrapper}>
            <div className={style.container}>
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
