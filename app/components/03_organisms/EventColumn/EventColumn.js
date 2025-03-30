import style from "./eventcolumn.module.scss";
import Media from "@/app/components/01_atoms/Media/Media";
import EventSlider from "@/app/components/02_molecules/EventSlider/EventSlider";
import { getEvents} from "@/sanity/sanity-query";

export const EventColumn = async (props) => {
    const events = await getEvents();

    return (
        <div className={style.wrapper}>
            { props.media ?
                <Media left={true} media={props.media}/>
                : <div/>
            }
            {
                events ?
                    <EventSlider data={events}/>
                : <div/>
            }
        </div>
    );
};

export default EventColumn;
