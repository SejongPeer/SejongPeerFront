import style from './Filter_Feild.module.css';
import search from '../../../assets/image/search_gray.png';

const Filter_Feild = () => {
  return (
    <div className={style.container}>
      <header className={style.header}>
        <span>학교수업 스터디</span>
      </header>
      <div className={style.search_container}>
        <div className={style.search_wrapper}>
          <img src={search} alt="search" />
          <input
            className={style.search_input}
            type="text"
            placeholder="검색어 입력"
          />
        </div>
      </div>
      <div className={style.filter_study}></div>
    </div>
  );
};

export default Filter_Feild;
