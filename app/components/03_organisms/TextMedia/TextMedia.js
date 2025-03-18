// content block with text and media (separated)
import style from "./textmedia.module.scss";
import Media from "@/app/components/01_atoms/Media/Media";
import TextBlock from "@/app/components/02_molecules/TextBlock/TextBlock";
import {getHomepage} from "@/sanity/sanity-query";

export async function TextMedia(props) {
    const content = await getHomepage();
    const data = content[0];
    return (
        <div className={style.wrapper}>
            <TextBlock hasFallback={!!props.hasFallback} text={data.about_me_text}/>
            <div className={style.media}>
                {
                    data.about_me_media ?
                        data.about_me_media.map((media, index) =>
                            <Media key={index} media={media}/>
                        )
                        : <div/>
                }
            </div>

        </div>
    );
}

export default TextMedia;
