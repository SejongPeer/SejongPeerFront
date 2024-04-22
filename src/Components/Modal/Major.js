import { MyContext } from '../../App.js';
import { useContext, useEffect, useState } from 'react';
import BottomModal from './BottomModal.js';
import collegeDummy from './majorDummy/College.js';
import EIE from './majorDummy/EIE.js';

import style from './Major.module.css';
import back from '../../assets/image/back_white.png';
import cancel_gray from '../../assets/image/cancel_gray.png';

const Major = props => {
  const { setModalOpen } = useContext(MyContext);
  const { setModalContent } = useContext(MyContext);
  const { setMajorValue } = useContext(MyContext);
  const { setCollegeValue } = useContext(MyContext);
  const { setDoubleMajorValue } = useContext(MyContext);
  const { setDoubleCollegeValue } = useContext(MyContext);

  const [selectedCollege, setSelectedCollege] = useState('');
  const [selectedMajor, setSelectedMajor] = useState('');
  const [seletedDoubleC, setSelectedDoubleC] = useState('');
  const [selectedDoubleM, setSelectedDoubleM] = useState('');
  const [isCollegeClicked, setIsCollegeClicked] = useState(false);
  const [searchContent, setSearchContent] = useState('');

  const isDouble = props.id === 'double';

  useEffect(() => {
    if (selectedMajor && selectedCollege) {
      setCollegeValue(selectedCollege);
      setMajorValue(selectedMajor);
      cancelHandler();
    }
  }, [selectedMajor, selectedCollege]);

  useEffect(() => {
    if (seletedDoubleC && selectedDoubleM) {
      setDoubleCollegeValue(seletedDoubleC);
      setDoubleMajorValue(selectedDoubleM);
      cancelHandler();
    }
  }, [seletedDoubleC, selectedDoubleM]);

  const handleDoubleCollege = text => {
    setSelectedCollege(text);
    setSelectedDoubleC(text);
    setIsCollegeClicked(true);
  };

  const handleCollegeClick = text => {
    setSelectedCollege(text);
    setIsCollegeClicked(true);
  };

  const handleMajorClick = text => {
    setSelectedMajor(text);
  };

  const handleDoubleMajor = text => {
    setSelectedDoubleM(text);
  };

  const BackHandler = () => {
    setIsCollegeClicked(false);
  };

  const cancelHandler = () => {
    setModalOpen(false);
    setModalContent('');
  };

  const handleInput = e => {
    setSearchContent(e.target.value);
  };

  let foundValues = [];

  // 객체의 값 중에서 searchInput이 포함된 값이 있는지 확인
  Object.values(EIE).forEach(departments =>
    departments.forEach(department => {
      if (searchContent !== '') {
        const index = department.indexOf(searchContent);
        if (index !== -1) {
          // searchInput이 포함된 경우
          const i = foundValues.indexOf(department);
          if (i == -1) {
            foundValues.push(department);
          }
        }
      }
    })
  );

  // if (foundValues.length > 0) {
  //     console.log(`찾은 값들: ${foundValues.join(', ')}`);
  // } else {
  //     console.log(`${searchContent}은(는) EIE 객체의 값 중에 포함되어 있지 않습니다.`);
  // }

  const Collegeselect = {
    display: isCollegeClicked ? 'none' : 'block',
  };
  const Major = {
    display: isCollegeClicked ? 'block' : 'none',
  };
  const Search = {
    display: searchContent ? 'block' : 'none',
  };

  return (
    <div>
      {isDouble ? (
        //복수전공 선택일 경우
        <BottomModal>
          <header className={style.header}>
            <div className={style.left}>
              {isCollegeClicked ? (
                <button className={style.back} onClick={BackHandler}>
                  <img src={back} alt="back" />
                </button>
              ) : (
                <div></div>
              )}
              <p className={style.title} onClick={BackHandler}>
                단과대학 선택
              </p>
            </div>
            <button className={style.close} onClick={cancelHandler}>
              <img src={cancel_gray} alt="close" />
            </button>
          </header>

          {/* <div className={style.search_container}>
                    <div className={style.search_wrapper}>
                        <img src={search} alt='search' />
                        <input className={style.search_input} type='text' placeholder='검색어 입력' onChange={handleInput} />
                    </div>
                </div> */}

          {/* College고를경우 */}
          {!searchContent && (
            <ul className={style.ul} style={Collegeselect}>
              {collegeDummy.college.map(element => (
                <li
                  key={element.id}
                  className={`${style.list} ${selectedCollege === element.text ? style.selected : ''}`}
                  onClick={() => handleDoubleCollege(element.text)}
                >
                  {element.text}
                </li>
              ))}
            </ul>
          )}
          {/* 학과고를경우 */}
          {selectedCollege && EIE[selectedCollege] && !searchContent && (
            <ul className={style.ul} style={Major}>
              {EIE[selectedCollege].map((dummy, index) => (
                <li
                  key={index}
                  className={`${style.list} ${selectedCollege === index.text ? style.selected : ''}`}
                  onClick={() => handleDoubleMajor(dummy)}
                >
                  {dummy}
                </li>
              ))}
            </ul>
          )}

          {/* 검색해서 학과 고를 경우 */}
          {searchContent && (
            <ul className={style.ul} style={Search}>
              {foundValues.map((val, index) => (
                <li key={index} className={style.list}>
                  {val}
                </li>
              ))}
            </ul>
          )}
        </BottomModal>
      ) : (
        //첫 단과대/학과 선택일 경우
        <BottomModal>
          <header className={style.header}>
            <div className={style.left}>
              {isCollegeClicked ? (
                <button className={style.back} onClick={BackHandler}>
                  <img src={back} alt="back" />
                </button>
              ) : (
                <div></div>
              )}
              <p className={style.title} onClick={BackHandler}>
                단과대학 선택
              </p>
            </div>
            <button className={style.cancel_gray} onClick={cancelHandler}>
              <img src={cancel_gray} alt="close" />
            </button>
          </header>

          {/* <div className={style.search_container}>
                    <div className={style.search_wrapper}>
                        <img src={search} alt='search' />
                        <input className={style.search_input} type='text' placeholder='검색어 입력' onChange={handleInput} />
                    </div>
                </div> */}

          {/* College고를경우 */}
          {!searchContent && (
            <ul className={style.ul} style={Collegeselect}>
              {collegeDummy.college.map(element => (
                <li
                  key={element.id}
                  className={`${style.list} ${selectedCollege === element.text ? style.selected : ''}`}
                  onClick={() => handleCollegeClick(element.text)}
                >
                  {element.text}
                </li>
              ))}
            </ul>
          )}
          {/* 학과고를경우 */}
          {selectedCollege && EIE[selectedCollege] && !searchContent && (
            <ul className={style.ul} style={Major}>
              {EIE[selectedCollege].map((dummy, index) => (
                <li
                  key={index}
                  className={`${style.list} ${selectedCollege === index.text ? style.selected : ''}`}
                  onClick={() => handleMajorClick(dummy)}
                >
                  {dummy}
                </li>
              ))}
            </ul>
          )}

          {/* 검색해서 학과 고를 경우 */}
          {searchContent && (
            <ul className={style.ul} style={Search}>
              {foundValues.map((val, index) => (
                <li key={index} className={style.list}>
                  {val}
                </li>
              ))}
            </ul>
          )}
        </BottomModal>
      )}
    </div>
  );
};

export default Major;
