import React, { useContext, useState, useEffect } from "react";
import { MyContext } from "../../App";

import style from './BottomModal.module.css';

const BottomModal = (props) => {
    const [animate, setAnimate] = useState(false);
    const { modalOpen } = useContext(MyContext);

    useEffect(() => {
        if (!modalOpen) {
          setAnimate(false);
        } else {
            setAnimate(true);
        }
      }, [modalOpen]);

    return <div className={`${style.container} ${animate ? style.animate : ''}`}>{props.children}</div>;
};

export default BottomModal;