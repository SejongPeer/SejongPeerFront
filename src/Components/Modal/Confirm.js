import React from "react";
import { MyContext } from "../../App";
import { useContext } from "react";
import BottomModal from "./BottomModal";
import style from './Confirm.module.css';
import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";


const Confirm = (props) => {
    const { setModalOpen } = useContext(MyContext);
    const { setModalContent } = useContext(MyContext);
    const { setBuddySubmit } = useContext(MyContext);
    // const navigate = useNavigate();

    const cancelHandler = () => {
        setModalOpen(false);
        setModalContent('');
    };

    const submitHandler = () => {
        setBuddySubmit(true);
        setModalOpen(false);
        setModalContent('');
    };

    return <div>
        <div onClick={cancelHandler} className={style.backdrop}/>
        <BottomModal>
            <header className={style.header}>
                <p>{props.firstTitle}</p>
            </header>
            <div className={style.content}>
                <p>{props.secondTitle}</p>
            </div>
            <footer className={style.action}>
                <button className={style.cancel} onClick={cancelHandler}>취소</button>
                <button className={style.submit} onClick={submitHandler}>{props.ok}</button>
            </footer>
        </BottomModal>
    </div>;
};

export default Confirm;