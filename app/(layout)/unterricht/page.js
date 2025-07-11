import Heading from "@/app/components/01_atoms/Heading/Heading";
import {getLessonsPage} from "@/sanity/sanity-query";
import TextMedia from "@/app/components/03_organisms/TextMedia/TextMedia";
import FlowerElement from "@/app/components/01_atoms/FlowerElement/FlowerElement";
import styles from "@/app/components/06_pages/Unterricht/lessons.module.scss";

export async function generateMetadata() {
    const pageContent = await getLessonsPage();
    const data = pageContent[0];

    if(!data.meta_description) {
        return {
            title: data.title,
        }
    }

    if(!data.title) {
        return {
            description: data.meta_description,
            openGraph: {
                title: data.title,
                description: data.meta_description,
                siteName: "Marion Dimbath | Posaune",
                type: "website",
                locale: "de_DE",
                url: "https://www.mariondimbath.de",
                images: [
                    {
                        url: "https://www.mariondimbath.de/img/og-image.jpg",
                        width: 1200,
                        height: 630,
                        alt: "Marion Dimbath mit Posaune"
                    }
                ]
            }
        }
    }

    return {
        description: data.meta_description,
        title: data.title,
        openGraph: {
            title: data.title,
            description: data.meta_description,
            siteName: "Marion Dimbath | Posaune",
            type: "website",
            locale: "de_DE",
            url: "https://www.mariondimbath.de",
            images: [
                {
                    url: "https://www.mariondimbath.de/img/og-image.jpg",
                    width: 1200,
                    height: 630,
                    alt: "Marion Dimbath mit Posaune"
                }
            ]
        }
    }
}

export const LessonsPage = async () => {
    const pageContent = await getLessonsPage();
    const data = pageContent[0];

    return (
        <main>
            <div className={styles.flowerWrapper}>
                <FlowerElement hasFallback={true}/>
            </div>
            <div className={styles.content}>
                <Heading hasFallback={true} tag="h1" type="headline-2" reversed={true} secondLine="Unterricht"/>
                <TextMedia hasFallback={true} text={data.text} media={data.media}/>
            </div>
        </main>
    );
};

export default LessonsPage;
