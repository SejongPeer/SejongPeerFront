import { useNavigate } from "react-router-dom";
import logo from "../../../Assets/sejongpeer.png";
import style from "./BuddyStart.module.css";
import { useDispatch } from "react-redux";
import { fetchData } from "../../../Redux/thunk";

const BuddyStart3 = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const MatchingHandler = () => {
    dispatch(fetchData("Buddy", navigate));
  };

  // useEffect(() => {
  //     if(sourceComponent === "Buddy"){
  //         if( statusCode === 301 ) {
  //             alert("로그인 후 이용이 가능합니다.");
  //             navigate('/login');
  //         } else if ( statusCode === 200 ){
  //             navigate('/buddy/matching');
  //         }
  //     }

  // }, [sourceComponent, statusCode]);

  const BackHandler = () => {
    navigate("/buddy/start2");
  };

  const sejongbuddy1 = " 2023년 9월 1일부터 9월 15일 까지";
  const sejongbuddy2 = "2023년 9월 20일";
  return (
    <div className={style.container}>
      <div className={style.top}>
        <div className={style.flex}>
          <img className={style.logo} src={logo} alt="logo" />
          <p className={style.title}>세종버디 모집 일정</p>
        </div>
        <div className={style.wrapper}>
          <p className={style.flex}>
            <span className={style.text3}>신청기한: &nbsp;</span>
            <span className={style.text2}>{sejongbuddy1}</span>
          </p>
          <p className={style.flex}>
            <span className={style.text3}>발표날짜: &nbsp;</span>
            <span className={style.text2}>{sejongbuddy2}</span>
          </p>
        </div>
      </div>
      <div className={style.bottom}>
        <button onClick={MatchingHandler} className={style.btn2}>
          다음 페이지
        </button>
        <button onClick={BackHandler} className={style.back}>
          이전 페이지
        </button>
      </div>
    </div>
  );
};

export default BuddyStart3;
