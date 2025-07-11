// content block with text and media (separated)
import style from "./textmedia.module.scss";
import Media from "@/app/components/01_atoms/Media/Media";
import TextBlock from "@/app/components/02_molecules/TextBlock/TextBlock";

export async function TextMedia(props) {

    return (
        <div className={` ${style.wrapper} ${props.centered ? style.centered : ''}`}>
            <TextBlock text={props.text}/>
            <div className={style.media}>
                {
                    props.media ?
                        props.media.map((media, index) =>
                            <Media key={index} media={media}/>
                        )
                        : <div/>
                }
            </div>
        </div>
    );
}

export default TextMedia;
