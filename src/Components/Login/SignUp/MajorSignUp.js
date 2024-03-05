import { useContext, useEffect } from 'react';
import { MyContext } from '../../../App';
import Vector from '../../../Assets/Vector.png'
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


    return (
        <div className={style.majorSelectionContainer}>
            <button
                onClick={onClickHandler}
                className={style.majorbox}>
                {isDoubleMajor ? props.doublemajorValue : props.majorValue}
                <img src={Vector} alt="Select" className={style.vectorImage} />

            </button>
        </div>
    );
};

export default MajorSignUp;