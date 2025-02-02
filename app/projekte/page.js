import {getProjects} from "@/sanity/sanity-query";

export const Projects = async () => {
    const data = await getProjects();
    console.log(data)
    return (
        <main>
            <p>Meine Projekte</p>
        </main>
    );
};

export default Projects;