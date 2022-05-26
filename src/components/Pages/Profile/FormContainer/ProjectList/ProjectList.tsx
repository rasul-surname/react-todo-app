import {useTypedSelector} from "../../../../../hooks/useTypedSelector";
import ProjectItem from "./ProjectItem/ProjectItem";
import classes from "./ProjectList.module.css";

interface InterfaceProjectsList {
    project: string;
    setProject: any;
}

const ProjectList: React.FC<InterfaceProjectsList> = ({project, setProject}) => {
    const {projects} = useTypedSelector(state => state.listReducer);

    return (
        <div className={classes.content}>
            <p className={classes.content__title}>Ожидаемый проект</p>
            <div className={classes.content__row}>
                {projects.map((elem) => {
                    return (
                        <ProjectItem id={elem.id} value={elem.value} project={project} setProject={setProject} />
                    )
                })}
            </div>
        </div>
    )
}

export default ProjectList;