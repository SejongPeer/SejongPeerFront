import React, { useContext, useState, useEffect } from 'react';
import { MyContext } from '../../App';

import style from './BottomModal.module.css';

const BottomModal = ({ state = null, children }) => {
  const [animate, setAnimate] = useState(false);
  const { modalOpen, setModalOpen } = useContext(MyContext);

  useEffect(() => {
    if (!modalOpen) {
      setAnimate(false);
    } else {
      setAnimate(true);
    }
  }, [modalOpen]);

  const cancelHandler = () => {
    setModalOpen(false);
    // props.deleteHandler()
  };

  return (
    <div className={style.modal}>
      <div
        onClick={state === 'studyPostField' ? null : cancelHandler}
        className={style.backdrop}
      />
      <div className={`${style.container} ${animate ? style.animate : ''}`}>
        {children}
      </div>
    </div>
  );
};

export default BottomModal;
