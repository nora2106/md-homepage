import style from "./grid.module.scss";
import Project from "@/app/components/02_molecules/ProjectTeaser/Project";

export const ProjectGrid = (props) => {
    return (
        <div className={style.gridWrapper}>
            {
                props.projects ?
                    props.projects.map((project, key) =>
                        <Project data={project} index={key} key={key}/>
                    )
                    : <div/>
            }
        </div>
    );
};

export default ProjectGrid;