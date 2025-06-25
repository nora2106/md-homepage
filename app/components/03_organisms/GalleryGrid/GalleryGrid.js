"use client"
import styles from "./gallerygrid.module.scss";
import GalleryImage from "@/app/components/01_atoms/GalleryImage/GalleryImage";
import {useEffect, useState} from "react";

export const GalleryGrid = (props) => {
    const [images, setImages] = useState([])

    useEffect(() => {
        let sortedArr = props.data.images;
        sortedArr.forEach(elem => {
            if(elem.sort === null) {
                elem.sort = sortedArr.length;
            }
        })
        sortedArr.sort(function(a,b){
            return a.sort - b.sort;
        });
        setImages(sortedArr);
    }, [props.data]);

    return (
            images.length > 0 ?
                <div className={styles.grid}>
                    {
                        images.map((elem, key) =>
                            <GalleryImage imageData={elem} key={key}/>
                        )
                    }
                </div>
                :
                <p>Aktuell stehen keine Bilder zur Verfügung.</p>
    );
};

export default GalleryGrid;
