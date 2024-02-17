import { useContext, useEffect } from 'react';
import { MyContext } from '../../../App';

import style from './InputTextBox.module.css';

const MajorSignUp = (props) => {
    const isDoubleMajor = props.id === "double_major";

    const { setModalOpen } = useContext(MyContext);
    const { setModalContent } = useContext(MyContext);
    const { majorValue } = useContext(MyContext);
    const { collegeValue } = useContext(MyContext);

    const { doubleMajorValue } = useContext(MyContext);
    const { doubleCollegeValue } = useContext(MyContext);


    useEffect(() => {
        if (typeof props.doubleCollegeData === "function") {
            props.doubleCollegeData(doubleCollegeValue);
        }
        if (typeof props.doublemajorData === "function") {
            props.doublemajorData(doubleMajorValue);
        }
    }, [doubleMajorValue, doubleCollegeValue, props]);


    useEffect(() => {
        if (typeof props.collegeData === "function") {
            props.collegeData(collegeValue);
        }
        if (typeof props.majorData === "function") {
            props.majorData(majorValue);
        }
    }, [majorValue, collegeValue, props]);

    const onClickHandler = (event) => {
        setModalOpen(true);
        setModalContent('selectMajor');
        event.preventDefault();
    }

    const DoubleMajorHandler = (event) => {
        setModalOpen(true);
        setModalContent('selectDoubleMajor');
        event.preventDefault();
    }


    return (isDoubleMajor ? (
        <button
            onClick={DoubleMajorHandler}
            className={style.majorbox}> {doubleMajorValue}</button >
    ) : (
        <button
            onClick={onClickHandler}
            className={style.majorbox}> {majorValue}</button >
    )

    );
};

export default MajorSignUp;