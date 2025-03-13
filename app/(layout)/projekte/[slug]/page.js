import {getProjects} from "@/sanity/sanity-query";
import Heading from "@/app/components/01_atoms/Heading/Heading"

export const ProjectDetail = async ({params}) => {
    let projectData = [];
    const data = await getProjects();
    data.forEach(elem => {
        if(elem.slug.current === params.slug) {
            projectData = elem;
        }
    })

    return (
        <main>
            {
                projectData ?
                    <div>
                        <Heading tag="h1" type="headline-2" firstLine={projectData.name}/>
                    </div>
                :
                    <Heading tag="h1" type="h2" firstLine="404 not found"/>
            }
        </main>
    );
};

export default ProjectDetail;
