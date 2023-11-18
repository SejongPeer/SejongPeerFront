import { MyContext } from "../../App";
import { useContext, useEffect, useState } from "react";
import BottomModal from './BottomModal';
import collegeDummy from "./majorDummy/College.js";
import EIE from "./majorDummy/EIE";

import style from './Major.module.css';
import back from '../../Assets/back.png';
import close from '../../Assets/close.png';

const Major = () => {
    const { setModalOpen } = useContext(MyContext);
    const { setModalContent } = useContext(MyContext);
    const { setMajorValue } = useContext(MyContext);
    const { setCollegeValue } = useContext(MyContext);

    const [selectedCollege, setSelectedCollege] = useState('');
    const [selectedMajor, setSelectedMajor] = useState('');
    const [isCollegeClicked, setIsCollegeClicked] = useState(false);

    useEffect(() => {
        if (selectedMajor && selectedCollege) {
            console.log(selectedCollege);
            console.log(selectedMajor);
            
            setCollegeValue(selectedCollege);
            setMajorValue(selectedMajor);
            cancelHandler();
        }
    }, [selectedMajor, selectedCollege]);

    const handleCollegeClick = (text) => {
        setSelectedCollege(text);
        setIsCollegeClicked(true);
    };

    const handleMajorClick = (text) => {
        setSelectedMajor(text);
    };
    

    const BackHandler = () => {
        setIsCollegeClicked(false);
    };

    const cancelHandler = () => {
        setModalOpen(false);
        setModalContent('');
    };

    

    const Collegeselect = {
        display : isCollegeClicked ? "none" : "block",
    };
    const Major = {
        display : isCollegeClicked ? "block" : "none",
    };

    return <div>
        <div onClick={cancelHandler} className={style.backdrop}/>
        <BottomModal>
            <header className={style.header}>
                <div className={style.left}>

                {isCollegeClicked ? 
                    <button 
                    className={style.back}
                    onClick={BackHandler}>
                        <img src={back} alt="back"/>
                    </button>
                    :
                    <div></div>
                }

                    <p className={style.title} onClick={BackHandler}>단과대학 선택</p>
                </div>

                <button className={style.close} onClick={cancelHandler}>
                    <img src={close} alt="close"/>
                </button>

            </header>

            <ul className={style.ul} style={Collegeselect}>
                {collegeDummy.college.map((element) => (
                    <li 
                        key={element.id}
                        className={`${style.list} ${selectedCollege === element.text ? style.selected : ''}`}
                        onClick={() => handleCollegeClick(element.text)}>
                        {element.text}
                    </li>
                ))}
            </ul>

            {selectedCollege && EIE[selectedCollege] && (
                <ul className={style.ul} style={Major}>
                {EIE[selectedCollege].map((dummy, index) => (
                    <li 
                    key={index}
                    className={`${style.list} ${selectedCollege === index.text ? style.selected : ''}`}
                    onClick={() => handleMajorClick(dummy)}
                    >{dummy}</li>
                ))}
                </ul>
            )}
        </BottomModal>
    </div>
};

export default Major;