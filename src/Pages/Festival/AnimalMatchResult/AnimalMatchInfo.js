import {useState} from 'react';
import { useNavigate, useContext } from 'react-router-dom'
import style from './AnimalMatchInfo.module.css'
// import SignInBox from './SignInBox';
import { MyContext } from '../../../App';

const AnimalMatchInfo = () => {
    console.log("AnimalMatchInfo 잘 들어옴!");
    return (
        <div className={style.entire_Container}>
            <h1>미팅정보입력</h1>
          <div className={style.container}>
            <div className={style.box} name="이름입력1">이름입력2</div>
            <div className={style.box} name="전번입력1">전번입력2</div>
            <button className={style.signInBtn}>
              미팅시작  
            </button>
          </div>
        </div>
      );
}
export default AnimalMatchInfo;
