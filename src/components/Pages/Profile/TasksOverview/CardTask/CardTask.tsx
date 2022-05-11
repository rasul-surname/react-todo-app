import classes from './CardTask.module.css';

interface InterfaceCardTask {
	timeVisible?: any;
	title: any;
	desc: any;
}

const CardTask: React.FC<InterfaceCardTask> = ({timeVisible, title, desc}) => {
	timeVisible = timeVisible || false;

	return (
		<div className={classes.container__box}>
            <div>
				{timeVisible ? 
					<div className={classes.container__boxNoteTitle}><span>час</span><span>мин</span></div>
					:
					''
				} 
                <p className={classes.container__boxTitle}>
                    {title}
                </p>
                <p className={classes.container__boxDesc}>{desc}</p>
            </div>
        </div>
	)
}

export default CardTask;