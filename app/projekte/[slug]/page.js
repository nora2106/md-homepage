import {getProjects} from "@/sanity/sanity-query";
import Heading from "../../components/01_atoms/Heading/Heading"

export const ProjectDetail = async ({params}) => {
    let projectData = [];
    //@todo 404 if slug doesnt exist
    const data = await getProjects();
    data.forEach(elem => {
        if(elem.slug.current === params.slug) {
            projectData = elem;
            console.log(projectData)
        }
    })

    return (
        <main>
            {
                projectData ?
                    <div>
                        <Heading tag="h1" type="h2" firstLine={projectData.name}/>
                    </div>
                :
                    <p>404 not found</p>
            }
        </main>
    );
};

export default ProjectDetail;