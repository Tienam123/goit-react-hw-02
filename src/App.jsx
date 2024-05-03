import Description from "@/components/Description/Description.jsx";
import Options from "@/components/Options/Options.jsx";
import {useEffect, useState} from "react";
import Feedback from "@/components/Feedback/Feedback.jsx";
import style from './App.module.css'
import Notification from "@/components/Notification/Notification.jsx";

const App = () => {
    const BASE_KEY = 'feedback'
    const [feedback, setFeedback] = useState(JSON.parse(localStorage.getItem(BASE_KEY)) ?? {
        good: 0,
        neutral: 0,
        bad: 0
    })
    const totalFeedback = feedback.good + feedback.neutral + feedback.bad
    const updateFeedback = feedbackType => {
        setFeedback(prevState => ({
            ...prevState,
            [feedbackType]: prevState[feedbackType] + 1
        }))
    }
    const resetFeedback = () => {
        setFeedback({
            good: 0,
            neutral: 0,
            bad: 0
        })
    }

    useEffect(() => {
        localStorage.setItem(BASE_KEY, JSON.stringify(feedback))
    }, [feedback]);
    const calculatePositive = () => Math.round((feedback.good / totalFeedback) * 100)

    return (
        <>
            <Description/>
            <Options feedback={feedback}
                     resetFeedback={resetFeedback}
                     updateFeedback={updateFeedback}
            />

            {totalFeedback > 0
             ?
             (
                 <>
                     <Feedback feedback={feedback}
                               totalFeedback={totalFeedback}
                               positive={calculatePositive()}
                     />
                 </>
             )
             : (<Notification text="No feedback yet"/>)
            }
        </>
    );
};
export default App;
