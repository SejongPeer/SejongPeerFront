import { useState } from 'react';
import con from '../CSS/H_Container.module.css';
import style from '../CSS/H_Menu.module.css';
const H_Menu = props => {
  // const [isClicked, setIsClicked] = useState(null);
  const [clickedIndex, setClickedIndex] = useState(null);
  const menu = [
    '공연 보기',
    '밥 먹기',
    '낮 부스 가기',
    '밤 주점 가기',
    '학교 나가기',
    '상관없음',
  ];

  const menuChoice = index => {
    setClickedIndex(index);
    if (index == 0) {
      props.setChoiceMenu('KOREAN');
      props.setChoiceMenuKorean('공연 보기');
    } else if (index == 1) {
      props.setChoiceMenu('WESTERN');
      props.setChoiceMenuKorean('밥 먹기');
    } else if (index == 2) {
      props.setChoiceMenu('CHINESE');
      props.setChoiceMenuKorean('낮 부스 가기');
    } else if (index == 3) {
      props.setChoiceMenu('JAPANESE');
      props.setChoiceMenuKorean('밤 주점 가기');
    } else if (index == 4) {
      props.setChoiceMenu('CAFETERIA');
      props.setChoiceMenuKorean('학교 나가기');
    } else {
      props.setChoiceMenu('NO_MATTER');
      props.setChoiceMenuKorean('상관없음');
    }
  };

  return (
    <div className={con.container}>
      <p className={con.title}>원하는 축제 액티비티를 선택해주세요!</p>
      <div className={style.menuContainer}>
        {menu.map((val, index) => (
          <button
            key={index}
            className={`${style.menuBtn}`}
            onClick={() => menuChoice(index)}
            style={{
              border:
                index === clickedIndex ? '3px solid red' : '1px solid #e5e5e5',
              color: index === 4 ? 'red' : 'black',
            }}
          >
            {' '}
            {index === 0 || index === 1 || index === 2 || index === 3 ? (
              <div className={style.menuBox}>
                <div className={`${style.imgBox} ${style[`item-${index}`]}`} />
                <div className={`${style.menuText} ${style[`text-${index}`]}`}>
                  {val}
                </div>
              </div>
            ) : (
              <div className={style.menuText}>{val}</div>
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

export default H_Menu;
