"use client"
import styles from "./galleryimage.module.scss";
import {urlForImage} from "@/sanity/sanity-client";
import { MdDownload } from "react-icons/md";

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

    return (
        <a className={styles.wrapper} href="" onClick={download}>
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
        </a>


    );
};

export default GalleryImage;
