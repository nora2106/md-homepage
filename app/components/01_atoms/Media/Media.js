"use client"
import style from "./media.module.scss";
import Image from "next/image";
import {urlForImage} from "@/sanity/sanity-client";
import {getFileAsset} from "@sanity/asset-utils";
import sanityConfig from "@/sanity.config";
import {useState} from "react";

export const Media = (props) => {
    return (
        props.media._type === 'image' ?
            <Image className={style.image} src='empty' width='500' height='500' alt='' loader={({ width, quality = 100 }) =>
                urlForImage(props.media.asset).width(width).quality(quality).url() }/>
            :
            <video className={style.video} width='500' height='500' controls preload="true">
                <source src={getFileAsset(props.media.asset, {projectId: sanityConfig.projectId, dataset: sanityConfig.dataset}).url}/>
            </video>
    );
};

export default Media;