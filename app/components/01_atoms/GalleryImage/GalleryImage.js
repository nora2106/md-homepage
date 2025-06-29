"use client"
import styles from "./galleryimage.module.scss";
import {urlForImage} from "@/sanity/sanity-client";
import { MdDownload } from "react-icons/md";
import {motion} from "motion/react";
import { saveAs } from 'file-saver';
import style from "@/app/components/01_atoms/Media/media.module.scss";

export const GalleryImage = (props) => {
    const download = () => {
        const fileName = props.imageData.alt.replace(" ", "-") + '.jpg'
        saveAs(props.imageData.image.asset.url, fileName);
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
        <motion.div variants={animFrames} initial="hide" animate="show"
                  transition={{ease: "easeIn", duration: .7, delay: (props.index * 0.3)}}
                  className={styles.wrapper} onClick={download}>
            <img
                className={styles.image}
                src={urlForImage(props.imageData.image.asset.url)
                    .width(800)
                    .quality(100)
                    .auto("format")
                    .url()}
                alt={props.imageData.alt}
                width="500"
                height="500"
                loading="lazy"
                fetchPriority="low"
            />
            <div className={styles.icon}>
                <span>Download</span>
                <MdDownload/>
            </div>
            {
                props.imageData.copyright ?
                    <span className={styles.copyright}>© {props.imageData.copyright}</span>
                    :
                    <div/>
            }
        </motion.div>


    );
};

export default GalleryImage;
