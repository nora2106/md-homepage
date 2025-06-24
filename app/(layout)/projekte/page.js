import {getProjects, getSettings} from "@/sanity/sanity-query";
import Heading from "@/app/components/01_atoms/Heading/Heading";
import Grid from "@/app/components/03_organisms/ProjectGrid/ProjectGrid";

export async function generateMetadata() {
    const pageContent = await getSettings();
    const data = pageContent[0];

    if(!data.meta_description) {
        return {
            title: data.projects_title,
        }
    }

    if(!data.title) {
        return {
            description: data.projects_meta_description,
            openGraph: {
                description: data.projects_meta_description,
            },
        }
    }

    return {
        description: data.projects_meta_description,
        title: data.title,
        openGraph: {
            description: data.projects_meta_description,
        },
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
