import Hero from "@/app/components/03_organisms/Hero/Hero";
import TextMedia from "@/app/components/03_organisms/TextMedia/TextMedia";
import Heading from "@/app/components/01_atoms/Heading/Heading";
import EventColumn from "@/app/components/03_organisms/EventColumn/EventColumn";
import { getHomepage} from "@/sanity/sanity-query";
import TextBanner from "@/app/components/02_molecules/TextBanner/TextBanner";

export const Home = async () => {
    const pageContent = await getHomepage();
    const data = pageContent[0];
    return (
        <main>
            <Hero headline1={data.page_headline[0]} headline2={data.page_headline[1]}/>
            <Heading tag='h2' firstLine={data.about_me_headline[0]} secondLine={data.about_me_headline[1]}/>
            <TextMedia media={data.about_me_media} text={data.about_me_text} image={true}/>
            <TextBanner text={data.banner_text}/>
            <Heading reversed={true} tag='h2' firstLine={data.events_headline[0]} secondLine={data.events_headline[1]}/>
            <EventColumn media={data.events_image}/>
        </main>
    );
};

export default Home;