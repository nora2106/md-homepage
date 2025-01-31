"use client"
import style from "./customimage.module.scss";
import Image from "next/image";
import {urlForImage} from "@/sanity/sanity-client";

export const CustomImage = (props) => {
    return (
        <Image className={style.image} src='empty' width='500' height='500' alt='' loader={({ width, quality = 100 }) =>
            urlForImage(props.img).width(width).quality(quality).url()
        }/>
    );
};

export default CustomImage;