import style from "./eventcolumn.module.scss";
import Media from "@/app/components/01_atoms/Media/Media";
import EventSlider from "@/app/components/02_molecules/EventSlider/EventSlider";
import { getEvents} from "@/sanity/sanity-query";
import FlowerElement from "@/app/components/01_atoms/FlowerElement/FlowerElement";

export const EventColumn = async (props) => {
    const events = await getEvents();

    return (
        <div className={style.wrapper}>
            { props.media ?
                <Media left={true} media={props.media}/>
                : <div/>
            }
            <div className={style.flowerWrapper}>
                <FlowerElement/>
            </div>
            {
                events ?
                    <EventSlider data={events}/>
                : <div/>
            }
        </div>
    );
};

export default EventColumn;
