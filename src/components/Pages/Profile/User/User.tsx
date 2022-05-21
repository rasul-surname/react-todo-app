import classes from './User.module.css';

const User = () => {

    return (
        <div className={classes.user}>
            <div className={classes.user__img}></div>
            <div className={classes.user__text}>
                <p className={classes.user__text__name}>
                    Расул
                </p>
                <p className={classes.user__text__status}>
                    «Neque porro quisquam est qui dolorem ipsum»
                </p>
            </div>
        </div>
    )
}

export default User;