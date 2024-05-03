import style from './Option.module.css'


const Option = ({updateFeedback, resetFeedback, feedback}) => {
    const buttons = Object.keys(feedback)
    console.log(feedback)
    const handleClickButton = (e) => {
        updateFeedback(e.target.ariaLabel)
    }

    return (
        <ul className={style.list}>
            {buttons.map((button, id) => (
                <li key={id}>
                    <button className={style.button}
                            onClick={handleClickButton}
                            aria-label={button}
                    >
                        {button[0].toUpperCase() + button.slice(1)}
                    </button>
                </li>
            ))}
            {(feedback.good > 0 || feedback.neutral > 0 || feedback.bad > 0) && (
                <li>
                    <button className={style.button}
                            aria-label='reset'
                            onClick={resetFeedback}
                    >
                        Reset
                    </button>
                </li>
            )}

        </ul>
    );
};
export default Option