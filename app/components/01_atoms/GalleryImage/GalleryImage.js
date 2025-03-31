"use client"
import styles from "./galleryimage.module.scss";
import {urlForImage} from "@/sanity/sanity-client";
import { MdDownload } from "react-icons/md";
import {motion} from "motion/react";

export const GalleryImage = (props) => {
    const download = async () => {
        const image = await fetch(props.url);

        const fileName = props.alt.replace(" ", "-")

        const imageBlob = await image.blob()
        const imageURL = URL.createObjectURL(imageBlob)
        const link = document.createElement('a')
        link.href = imageURL;
        link.download = "" + fileName + "";
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
    }

    let animFrames = {
        hide: {
            opacity: 0,
            scale: .7,
        },
        show: {
            opacity: 1,
            scale: 1,
        },
    }

    return (
        <motion.a variants={animFrames} initial="hide" animate="show"
                  transition={{ease: "easeIn", duration: .7, delay: (props.index * 0.3)}}
                  className={styles.wrapper} href="" onClick={download}>
            <img
                className={styles.image}
                src={urlForImage(props.media.asset)
                    .width(800)
                    .quality(100)
                    .auto("format")
                    .url()}
                alt={props.alt}
                width="500"
                height="500"
                loading="lazy"
                fetchPriority="low"
            />
            <div className={styles.icon}>
                <span>Download</span>
                <MdDownload/>
            </div>
        </motion.a>


    );
};

export default GalleryImage;
