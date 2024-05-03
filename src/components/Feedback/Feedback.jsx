import style from './Feedback.module.css'

const Feedback = ({
                      feedback: {
                          good,
                          neutral,
                          bad
                      },
                      totalFeedback,
                      positive
                  }) => {
    return (
        <>
            <p className={style.good}>Good: {good}</p>
            <p className={style.neutral}>Neutral: {neutral}</p>
            <p className={style.bad}>Bad: {bad}</p>
            <p className={style.total}>Total:{totalFeedback}</p>
            <p className={style.positive}>Positive:{positive}%</p>
        </>
    );
};
export default Feedback