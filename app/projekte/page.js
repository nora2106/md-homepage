import {getProjects} from "@/sanity/sanity-query";
import Heading from "@/app/components/01_atoms/Heading/Heading";
import Grid from "@/app/components/02_molecules/Grid/Grid";

export const Projects = async () => {
    const data = await getProjects();
    return (
        <main>
            <Heading tag="h1" type="h1" firstLine="Projekte"/>
            <Grid projects={data}/>
        </main>
    );
};

export default Projects;