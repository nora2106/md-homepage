import styles from "./gallerygrid.module.scss";
import GalleryImage from "@/app/components/01_atoms/GalleryImage/GalleryImage";

export const GalleryGrid = (props) => {
    return (
            props.data.images.length > 0 ?
                <div className={styles.grid}>
                    {
                        props.data.images.map((elem, key) =>
                            <GalleryImage key={key} media={elem.image} alt={elem.alt} url={elem.image.asset.url}/>
                        )
                    }
                </div>
                :
                <p>Aktuell stehen keine Bilder zur Verfügung.</p>
    );
};

export default GalleryGrid;
