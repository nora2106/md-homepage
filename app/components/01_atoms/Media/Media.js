"use client"
import style from "./media.module.scss";
import {urlForImage} from "@/sanity/sanity-client";
import {useEffect, useState} from "react";

export const Media = (props) => {

    if (props.media._type === "image") {
        return (
            <img
                className={style.image}
                src={urlForImage(props.media.asset)
                    .width(800)
                    .quality(100)
                    .auto("format")
                    .url()}
                alt="media"
                width="500"
                height="500"
                loading="lazy"
                fetchPriority="low"
            />
        );
    }
    else {
        const [videoSrc, setVideoSrc] = useState("");

        useEffect(() => {
            const assetId = props.media.asset._ref.replace("file-", "").replace("-mp4", "");
            const projectId = "mh231zz3";
            const dataset = "production";
            const url = `https://cdn.sanity.io/files/${projectId}/${dataset}/${assetId}.mp4`;
            setVideoSrc(url);
        }, [props.media]);

        return (
                videoSrc ?
                    <video className={style.video} width='500' height='500' controls preload="true">
                        <source src={videoSrc}/>
                    </video>
                    :
                <div/>
        );
    }
};

export default Media;
