"use client"
import style from "./media.module.scss";
import {urlForImage} from "@/sanity/sanity-client";
import {useEffect, useState} from "react";
import {motion} from "motion/react";

export const Media = (props) => {
    let mediaVariants = {
        hide: {
            opacity: 0,
            x: "100%",
        },
        show: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 1.2,
                transition: ["ease-in"],
            }
        },
    }

    if (props.left) {
        mediaVariants = {
            hide: {
                opacity: 0,
                x: "-100%",
            },
            show: {
                opacity: 1,
                x: 0,
                transition: {
                    duration: 1.4,
                    transition: ["ease-in"],
                }
            },
        }
    }

    if (props.centered) {
        mediaVariants = {
            hide: {
                opacity: 0,
                scale: .6,
            },
            show: {
                opacity: 1,
                scale: 1,
                transition: {
                    duration: 1.6,
                    transition: ["ease-in"],
                }
            },
        }
    }

    if (props.media._type === "image") {
        return (
            <motion.img
                initial="hide"
                whileInView="show"
                viewport={{once: true}}
                variants={mediaVariants}
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
    } else {
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
                <motion.video initial="hide"
                              whileInView="show"
                              viewport={{once: true}}
                              variants={mediaVariants}
                              className={style.video} width='500' height='500' controls preload="true">
                    <source src={videoSrc}/>
                </motion.video>
                :
                <div/>
        );
    }
};

export default Media;
