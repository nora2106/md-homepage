import {getProjects} from "@/sanity/sanity-query";
import Heading from "@/app/components/01_atoms/Heading/Heading";
import Grid from "@/app/components/03_organisms/ProjectGrid/ProjectGrid";

export const Projects = async () => {
    const data = await getProjects();
    return (
        <main>
            <Heading hasFallback={true} tag="h1" type="headline-2" firstLine="Projekte"/>
            <Grid projects={data}/>
        </main>
    );
};

export default Projects;
