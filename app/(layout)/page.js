import Hero from "@/app/components/03_organisms/Hero/Hero";
import TextMedia from "@/app/components/03_organisms/TextMedia/TextMedia";
import Heading from "@/app/components/01_atoms/Heading/Heading";
import EventColumn from "@/app/components/03_organisms/EventColumn/EventColumn";
import { getHomepage} from "@/sanity/sanity-query";
import TextBanner from "@/app/components/02_molecules/TextBanner/TextBanner";
import styles from "../components/06_pages/Home/home.module.scss"
import FlowerElement from "@/app/components/01_atoms/FlowerElement/FlowerElement";
import Media from "@/app/components/01_atoms/Media/Media";

export const metadata = {
    description: "Professionelle Posaunistin für Jazz, Konzerte & Unterricht in München.",
    keywords: [
        "Posaunistin München",
        "Jazzposaune München",
        "Posaunenunterricht München",
        "Live Musik München",
        "Jazzposaune",
        "Posaune München",
        "Posaune lernen"
    ],
    alternates: {
        canonical: "https://marion-dimbath.netlify.app"
    }
}

export const Home = async () => {
    const pageContent = await getHomepage();
    const data = pageContent[0];
    return (
        <main>
            <Hero headline1={data.page_headline[0]} headline2={data.page_headline[1]}/>
            <div className={styles.flowerWrapper1}>
                <FlowerElement/>
            </div>
            <Heading tag='h2' firstLine={data.about_me_headline[0]} secondLine={data.about_me_headline[1]}/>
            <TextMedia text={data.about_me_text} media={data.about_me_media}/>
            {
                data.media_centered ?
                    <div className={styles.singleMedia}>
                        <Media centered={true} media={data.media_centered[0]} />
                    </div>
                    : <div/>
            }
            <Heading tag='h2' firstLine={data.my_projects_headline[0]} secondLine={data.my_projects_headline[1]}/>
            <TextBanner buttonText={data.banner_button_text} text={data.banner_text}/>
            <Heading reversed={true} tag='h2' firstLine={data.events_headline[0]} secondLine={data.events_headline[1]}/>
            <EventColumn media={data.events_image}/>
        </main>
    );
};

export default Home;
