import { useState } from 'react';
import con from '../css/H_Container.module.css';
import btn2 from '../css/H_Btn2.module.css';

const ChoiceGenderHonbob = props => {
  const [isSameClicked, setIsSameClicked] = useState(false);
  const [isDontCareClicked, setIsDontCareClicked] = useState(false);

  const clickSameBtnHandler = () => {
    setIsSameClicked(true);
    setIsDontCareClicked(false);
    const choiceGender = '남자';
    props.sendChoiceMyGenderData(choiceGender);
  };

  const clickDontCareBtnHandler = () => {
    setIsSameClicked(false);
    setIsDontCareClicked(true);
    const choiceGender = '여자';
    props.sendChoiceMyGenderData(choiceGender);
  };

  const clickSameBtnColor = isSameClicked ? btn2.clicked : btn2.selectBtn;
  const clickDontCareBtnColor = isDontCareClicked
    ? btn2.clicked
    : btn2.selectBtn;

  return (
    <div className={con.container}>
      <p className={con.title}>자신의 성별을 선택해주세요</p>
      <div>
        <button className={clickSameBtnColor} onClick={clickSameBtnHandler}>
          남자
        </button>
        <button
          className={clickDontCareBtnColor}
          onClick={clickDontCareBtnHandler}
        >
          여자
        </button>
      </div>
    </div>
  );
};

export default ChoiceGenderHonbob;
