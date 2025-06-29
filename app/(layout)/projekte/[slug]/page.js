import {getProjects} from "@/sanity/sanity-query";
import Heading from "@/app/components/01_atoms/Heading/Heading"
import styles from "@/app/components/06_pages/Project/project.module.scss";
import FlowerElement from "@/app/components/01_atoms/FlowerElement/FlowerElement";
import TextMedia from "@/app/components/03_organisms/TextMedia/TextMedia";
import Button from "@/app/components/01_atoms/Button/Button";

export const ProjectDetail = async ({params}) => {
    let projectData = [];
    const data = await getProjects();
    data.forEach(elem => {
        if(elem.slug === params.slug) {
            projectData = elem;
        }
    })

    return (
        <main>
            <div className={styles.flowerWrapper}>
                <FlowerElement hasFallback={true}/>
            </div>
            <div className={styles.content}>
                <div className={styles.backLink}>
                    <Button slug='/projekte' arrowLeft={true} text='Zurück'/>
                </div>
            {
                projectData ?
                    <div>
                        <Heading tag="h1" type="headline-2" firstLine={projectData.name}/>
                    </div>
                :
                    <Heading tag="h1" type="h3" firstLine="404 not found"/>
            }
                <TextMedia hasFallback={true} text={projectData.body} media={projectData.media}/>
            </div>
        </main>
    );
};

export default ProjectDetail;
