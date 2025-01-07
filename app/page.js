import Hero from "@/app/components/03_organisms/Hero/Hero";
import TextMedia from "@/app/components/03_organisms/TextMedia/TextMedia";
import Heading from "@/app/components/01_atoms/Heading/Heading";

export const Home = () => {
    return (
        <main>
            <Hero/>
            <Heading tag='h2' firstLine="über" secondLine="mich"/>
            <TextMedia image={true}/>
            <Heading reversed={true} tag='h2' firstLine="öffentliche" secondLine="termine"/>
        </main>
    );
};

export default Home;