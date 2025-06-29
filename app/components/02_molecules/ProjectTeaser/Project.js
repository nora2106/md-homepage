"use client"
import style from "./project.module.scss";
import Button from "@/app/components/01_atoms/Button/Button";
import Shape1 from "@/public/img/shape1.svg"
import Shape2 from "@/public/img/shape2.svg"
import Shape3 from "@/public/img/shape3.svg"
import {usePathname} from "next/navigation";
import {useEffect, useState} from "react";
import {motion} from "motion/react";
import {urlForImage} from "@/sanity/sanity-client";
import styles from "@/app/components/01_atoms/GalleryImage/galleryimage.module.scss";

export const Project = (props) => {
    const letter = props.data.name.slice(0, 1);
    const currentURl = usePathname();
    const delay = (.3 + (props.index * 0.2))
    const [previewImg, setPreviewImg] = useState(null);


    useEffect(() => {
        if (props.data.previewImage) {
            setPreviewImg(urlForImage(props.data.previewImage)
                .width(800)
                .quality(100)
                .auto("format")
                .url());
        }
    }, [props.data]);

    return (
        <motion.div initial={{"--border-width": "0", "--border-height": "0"}}
                    animate={{"--border-width": "95%", "--border-height": "22em"}}
                    transition={{duration: .7, ease: ['easeIn']}} className={style.wrapper}>
            <div className={style.container}>
                <motion.h2 animate={{opacity: 1}} initial={{opacity: 0}}
                           transition={{duration: .8, ease: ['easeIn'], delay: (delay + .4)}}
                           className={style.headline}>{props.data.name}
                </motion.h2>
                <motion.div animate={{scale: 1, opacity: 1}} initial={{scale: .2, opacity: 0}}
                            transition={{duration: 1, ease: ['easeIn'], delay: delay}}
                            className={style.shapeContainer}>
                {
                    previewImg ?
                        <img
                            className={style.image}
                            src={previewImg}
                            alt=""
                            width="500"
                            height="500"
                            loading="lazy"
                            fetchPriority="low"
                        />
                        :
                            <motion.span animate={{opacity: 1}} initial={{opacity: 0}}
                                         transition={{duration: .8, ease: ['easeIn'], delay: (delay + .4)}}
                                         className={style.letter}>{letter}
                            </motion.span>
                }
                </motion.div>
                <motion.div animate={{opacity: 1}} initial={{opacity: 0}}
                            transition={{duration: .8, ease: ['easeIn'], delay: (delay + .4)}}>
                    <Button text="Anschauen" slug={currentURl + "/" + props.data.slug.current} arrow={true}/>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default Project;
