import { useEffect, useState } from 'react';
import check from '../../../../assets/image/check.png';
import con from '../CSS/B_Container.module.css';
import btn3 from '../CSS/B_Btn3.module.css';
import nugul from '../../../../assets/image/nugul.png';

const Major = props => {
  const [isMajorClicked, setIsMajorClicked] = useState(false);
  const [isCollegeClicked, setIsCollegeClicked] = useState(false);
  const [isAnyClicked, setIsAnyClicked] = useState(false);
  const [isSecond, setIsSecond] = useState(false);

  const clickMajorBtnHandler = () => {
    setIsMajorClicked(!isMajorClicked);
    setIsCollegeClicked(false);
    setIsAnyClicked(false);

    const major = '우리 학과 버디';
    props.sendMajorData(major);
  };

  const clickCollegeBtnHandler = () => {
    setIsMajorClicked(false);
    setIsCollegeClicked(true);
    setIsAnyClicked(false);

    const major = '우리 단과대 버디';
    props.sendMajorData(major);
  };

  const clickAnyBtnHandler = () => {
    setIsMajorClicked(false);
    setIsCollegeClicked(false);
    setIsAnyClicked(true);

    const major = '상관없음';
    props.sendMajorData(major);
  };

  const clickSecondHandler = () => {
    let second = !isSecond;
    setIsSecond(second);
    props.sendSubMajorData(second);
  };

  const clickMajorBtnColor = isMajorClicked ? btn3.clicked : btn3.selectBtn3;
  const clickCollegeBtnColor = isCollegeClicked
    ? btn3.clicked
    : btn3.selectBtn3;
  const clickAnyBtnColor = isAnyClicked ? btn3.clicked : btn3.selectBtn3;

  return (
    <div className={con.container}>
      <p className={con.title}>어떤 범위에서 찾길 원하시나요?</p>
      <div className={con.btn3}>
        <button className={clickMajorBtnColor} onClick={clickMajorBtnHandler}>
          <span>우리 학과 버디</span>
          {isMajorClicked && (
            <img className={btn3.check} src={check} alt="check" />
          )}
        </button>

        <button
          className={clickCollegeBtnColor}
          onClick={clickCollegeBtnHandler}
        >
          <span>우리 단과대 버디</span>
          {isCollegeClicked && (
            <img className={btn3.check} src={check} alt="check" />
          )}
        </button>

        <button className={clickAnyBtnColor} onClick={clickAnyBtnHandler}>
          <span>상관없음</span>
          {isAnyClicked && (
            <img className={btn3.check} src={check} alt="check" />
          )}
        </button>

        <div className={btn3.second_box}>
          <div className={btn3.second_check} onClick={clickSecondHandler}>
            {isSecond ? (
              <img className={btn3.check2} src={check} alt="check"></img>
            ) : (
              <div></div>
            )}
          </div>
          <span className={btn3.second_text}>
            복수/부전공 학과 기준으로 찾기
          </span>
        </div>
      </div>
      <div className={btn3.tip_box}>
        <span className={btn3.tip}>TIP. </span>
        <span className={btn3.tip_text}>
          [인공지능 융합대학]은 단과대 단위로 설정 시 24학번만 매칭 됩니다!
        </span>
        <img src={nugul} alt="nugul" className={btn3.tip_nugul}></img>
      </div>
    </div>
  );
};

export default Major;
