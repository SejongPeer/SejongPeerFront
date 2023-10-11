import { useContext, useEffect } from 'react';
import { MyContext } from '../../../App';

import style from './InputTextBox.module.css';

const MajorSignUp = (props) => {
    const { setModalOpen } = useContext(MyContext);
    const { setModalContent } = useContext(MyContext);
    const { majorValue } = useContext(MyContext);

    useEffect(() => {
        props.majorData(majorValue);
    }, [majorValue, props]);

    const onClickHandler = (event) => {
        setModalOpen(true);
        setModalContent('selectMajor');
        event.preventDefault();
    }

    return <button 
    onClick={onClickHandler} 
    className={style.majorbox}>{majorValue}</button>;
};

export default MajorSignUp;