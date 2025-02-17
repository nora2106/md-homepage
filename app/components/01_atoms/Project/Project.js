import style from "./project.module.scss";
import Button from "@/app/components/01_atoms/Button/Button";
import shape1 from "@/public/img/shape1.svg"
import shape2 from "@/public/img/shape2.svg"
import shape3 from "@/public/img/shape3.svg"
import Image from 'next/image';

export const Project = (props) => {
    const shapes = [shape1, shape2, shape3];

    //@todo maybe assign random shape in backend?
    function getRandomShape() {
        let randomNum = Math.floor(Math.random() * (3 - 1 + 1) + 1);
        return shapes[randomNum - 1].src;
    }

    return (
        <div className={style.container}>
            <p>{props.data.name}</p>
            <Image width="300" height="300" src={getRandomShape()} alt=""/>
            <p>{props.data.description}</p>
            <Button text="Anschauen" arrow={true}/>
        </div>
    );
};

export default Project;