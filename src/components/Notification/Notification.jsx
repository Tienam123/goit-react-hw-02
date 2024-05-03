import style from './Notification.module.css'

const Notification = ({text}) => {
    return (
        <>
            <p className={style.text}>{text}</p>
        </>
    );
};
export default Notification