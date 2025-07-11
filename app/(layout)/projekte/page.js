import {getProjects, getSettings} from "@/sanity/sanity-query";
import Heading from "@/app/components/01_atoms/Heading/Heading";
import Grid from "@/app/components/03_organisms/ProjectGrid/ProjectGrid";

export async function generateMetadata() {
    const pageContent = await getSettings();
    const data = pageContent[0];

    if(!data.projects_meta_description) {
        return {
            title: data.projects_title,
        }
    }

    if(!data.projects_title) {
        return {
            description: data.projects_meta_description,
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
        description: data.projects_meta_description,
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

export const Projects = async () => {
    const data = await getProjects();
    return (
        <main>
            <Heading reversed={true} hasFallback={true} tag="h1" type="headline-2" secondLine="Projekte"/>
            <Grid projects={data}/>
        </main>
    );
};

export default Projects;
