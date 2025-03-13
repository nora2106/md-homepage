"use client"
import style from "./grid.module.scss";
import Project from "@/app/components/02_molecules/ProjectTeaser/Project";
import {useEffect, useState} from "react";

export const ProjectGrid = (props) => {
    const [projects, setProjects] = useState([])
    useEffect(() => {
        let sortedArr = props.projects;
        sortedArr.forEach(elem => {
            if(elem.sort === null) {
                elem.sort = sortedArr.length;
            }
        })
        sortedArr.sort(function(a,b){
            return a.sort - b.sort;
        });
        setProjects(sortedArr);
    }, [props.projects]);
    return (
        <div className={style.gridWrapper}>
            {
                projects ?
                    projects.map((project, key) =>
                        <Project data={project} index={key} key={key}/>
                    )
                    : <div/>
            }
        </div>
    );
};

export default ProjectGrid;
