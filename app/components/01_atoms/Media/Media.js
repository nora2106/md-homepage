"use client"
import style from "./media.module.scss";
import {urlForImage} from "@/sanity/sanity-client";
import {useEffect, useState} from "react";
import {motion} from "motion/react";
import styles from "@/app/components/01_atoms/Button/button.module.scss";

export const Media = (props) => {
    let mediaVariants = {
        hide: {
            opacity: 0,
            x: "60%",
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
                x: "-50%",
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
    if (props.media._type === "file") {
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
    } else if (props.media.image) {
        return (
            <motion.div initial="hide"
                        whileInView="show"
                        viewport={{once: true}}
                        variants={mediaVariants}
                        className={` ${style.image} ${props.centered ? style.centeredImage : ''}`}>
                <img

                    src={urlForImage(props.media.image.asset)
                        .width(800)
                        .quality(100)
                        .auto("format")
                        .url()}
                    alt={props.media.alt}
                    width="500"
                    height="500"
                    loading="lazy"
                    fetchPriority="low"
                />
                {
                    props.media.copyright ?
                        <span className={style.copyright}>© {props.media.copyright}</span>
                        :
                        <div/>
                }
            </motion.div>

        );
    } else if (props.media._type === 'linkObject') {
        function getYouTubeId(url) {
            try {
                const u = new URL(url);

                if (u.hostname === 'youtu.be') {
                    // short URL → use pathname without leading slash
                    return u.pathname.slice(1);
                }

                if (u.hostname.includes('youtube.com')) {
                    if (u.pathname === '/watch') {
                        return u.searchParams.get('v');
                    }

                    if (u.pathname.startsWith('/embed/')) {
                        return u.pathname.split('/')[2];
                    }
                }

                return null;
            } catch {
                return null;
            }
        }

        const ytID = getYouTubeId(props.media.url);
        return (
            <motion.div className={style.videoWrapper} initial="hide"
                        whileInView="show"
                        viewport={{once: true}}
                        variants={mediaVariants}>
                {
                    ytID ?
                        <iframe
                            src={`https://www.youtube-nocookie.com/embed/${ytID}`}
                            title="YouTube video"
                            loading="lazy"
                            allow="accelerometer; clipboard-write; encrypted-media; gyroscope;"
                            allowFullScreen
                        ></iframe>
                        :
                        <p>Not a valid youtube link.</p>
                }

            </motion.div>
        );
    }
};

export default Media;
