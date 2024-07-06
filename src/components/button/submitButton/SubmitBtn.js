import style from './SubmitBtn.module.css'

const SubmitBtn = ({
    name,
    ready,
    onClickHandler
}) => {
    return <button 
        className={ready ? style.submitBtn : style.submitBtn_notReady} 
        onClick={onClickHandler}
    >
        {name}
    </button>
}

export default SubmitBtn;