// content block with text and media (separated)
import style from "./textmedia.module.scss";
import Media from "@/app/components/01_atoms/Media/Media";
import TextBlock from "@/app/components/02_molecules/TextBlock/TextBlock";

export async function TextMedia(props) {
    console.log(props.media);
    
    return (
        <>
            <div className={` ${style.wrapper} ${props.centered ? style.centered : ''}`}>
                {
                    props.text ?
                        <TextBlock text={props.text} />
                        : <div />
                }
                {
                    props.media && props.text ?
                        <div className={style.media}>
                            <Media media={props.media} />
                        </div>
                        : <div />
                }
            </div>
            {
                props.media && props.media.length > 1 ?
                    <div className={style.moreMedia}>
                        {
                            props.text ?
                                props.media.slice(1, props.media.length).map((media, index) =>
                                    <Media autoWidth={true} key={index} media={media} />
                                )
                                : props.media.map((media, index) =>
                                    <Media autoWidth={true} key={index} media={media} />
                                )
                        }
                    </div>
                    : <div />
            }
        </>
    );
}

export default TextMedia;
