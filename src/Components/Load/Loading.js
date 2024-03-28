import React from 'react';
import style from './Loading.module.css';
import Spinner from '../../Assets/spinner.gif';
export const Loading = () => {
  return (
    <div className={style.Background}>
      <img src={Spinner} alt="로딩중" width="2%" height="2%" />
    </div>
  );
};

export default Loading;