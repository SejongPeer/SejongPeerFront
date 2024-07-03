import React from 'react';

import Spinner from '../../assets/image/spinner.gif';

import style from './Loading.module.css';

export const Loading = () => {
  return (
    <div className={style.Background}>
      <img src={Spinner} alt="로딩중" width="2%" height="2%" />
    </div>
  );
};

export default Loading;
