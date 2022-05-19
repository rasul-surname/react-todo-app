import classes from "./User.module.css";

interface InterfaceUser {
    name: string;
    status: string;
}

const User: React.FC<InterfaceUser> = ({name, status}) => {

    return (
        <div className={classes.user}>
            <div className={classes.user__img}></div>
            <div className={classes.user__text}>
                <p className={classes.user__text__name}>{name}</p>
                <p className={classes.user__text__status}>{status}</p>
            </div>
        </div>
    )
}

export default User;