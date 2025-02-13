import style from "./eventcolumn.module.scss";
import CustomImage from "@/app/components/01_atoms/CustomImage/CustomImage";
import EventSlider from "@/app/components/02_molecules/EventSlider/EventSlider";
import { getEvents} from "@/sanity/sanity-query";

export const EventColumn = async (props) => {
    const events = await getEvents();

    return (
        <div className={style.wrapper}>
            { props.media ?
                <CustomImage img={props.media}/>
                : <div/>
            }
            <EventSlider data={events}/>
        </div>
    );
};

export default EventColumn;