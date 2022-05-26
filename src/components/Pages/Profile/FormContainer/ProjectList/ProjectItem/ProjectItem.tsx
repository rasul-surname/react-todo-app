import React from 'react';
import classes from "./ProjectItem.module.css";

interface InterfaceProjectItem {
    id: number;
    value: string;
    project: string;
    setProject: any;
}

const ProjectItem: React.FC<InterfaceProjectItem> = ({id, value, project, setProject}) => {
    const activeElement = project === value;

    return (
        <>
            {activeElement ?
                <div className={classes.content + ' ' + classes.content__active} key={id} onClick={() => setProject(value)}>
                    {value}
                </div>
            :
                <div className={classes.content} key={id} onClick={() => setProject(value)}>
                    {value}
                </div>
            }
        </>
    );
};

export default ProjectItem;