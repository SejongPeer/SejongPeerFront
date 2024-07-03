import style from './StudyFilterPage.module.css';
import search from '../../../assets/image/search_gray.png';
import back from '../../../assets/image/back_black.png';

const StudyFilter = () => {
  return (
    <div className={style.container}>
      <div className={style.innerContainer}>
        <div className={style.searchContainer}>
          <img className={style.backImg} src={back} alt="back"></img>
          <div className={style.searchWrapper}>
            <img src={search} alt="search" />
            <input
              className={style.search_input}
              type="text"
              placeholder="검색어 입력"
            />
          </div>
        </div>
        <div className={style.middleContainer}>
          <div className={style.contentBox}>
            <div className={style.tip}>Tip.</div>
            <div className={style.content}>
              수업이름 혹은 태그를 이용해 검색해 보세요!
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudyFilter;
