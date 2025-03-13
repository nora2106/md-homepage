import Heading from "@/app/components/01_atoms/Heading/Heading";
import {getLessonsPage} from "@/sanity/sanity-query";
import TextMedia from "@/app/components/03_organisms/TextMedia/TextMedia";

export const LessonsPage = async () => {
    const pageContent = await getLessonsPage();
    const data = pageContent[0];
    return (
        <main>
            <Heading tag="h1" type="headline-2" firstLine="Unterricht"/>
            <TextMedia text={data.text} media={data.media}/>
        </main>
    );
};

export default LessonsPage;
