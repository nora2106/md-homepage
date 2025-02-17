import style from "./grid.module.scss";
import Project from "@/app/components/01_atoms/Project/Project";

export const Grid = (props) => {
    return (
        <div className={style.gridWrapper}>
            {
                props.projects ?
                    props.projects.map((project, key) =>
                        <Project data={project} key={key}/>
                    )
                    : <div/>
            }
        </div>
    );
};

export default Grid;