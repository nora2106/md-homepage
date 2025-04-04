import {getProjects} from "@/sanity/sanity-query";
import Heading from "@/app/components/01_atoms/Heading/Heading"
import styles from "@/app/components/06_pages/Project/project.module.scss";
import FlowerElement from "@/app/components/01_atoms/FlowerElement/FlowerElement";

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
            <div className={styles.flowerWrapper}>
                <FlowerElement hasFallback={true}/>
            </div>
            <div className={styles.content}>
            {
                projectData ?
                    <div>
                        <Heading tag="h1" type="headline-2" firstLine={projectData.name}/>
                    </div>
                :
                    <Heading tag="h1" type="h2" firstLine="404 not found"/>
            }
            </div>
        </main>
    );
};

export default ProjectDetail;
