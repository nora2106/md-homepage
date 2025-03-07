// content block with varying media/text sections
import style from "./textmediablocks.module.scss";
import Media from "@/app/components/01_atoms/Media/Media";
import TextBlock from "@/app/components/02_molecules/TextBlock/TextBlock";

export function TextMediaBlocks (props) {
    const mediaList = props.media;
    const textList = props.text;
    let maxLength = 3;
    // if(mediaList.length > textList.length) {
    //     maxLength = mediaList.length
    // }
    const rows = [];
    for(let i = maxLength; i > 0; i--) {
        rows.push(<p key={i}>{i}</p>)
    }

    return (
        <div className={style.wrapper}>
            {rows}
        </div>
    );
}

export default TextMediaBlocks;
