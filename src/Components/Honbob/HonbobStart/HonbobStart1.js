import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import style from "./HonbobStart.module.css";

const HonbobStart1 = () => {
  const navigate = useNavigate();
  const accessToken = localStorage.getItem('accessToken');
  const refreshToken = localStorage.getItem('refreshToken');

  const HonbobHandler = async () => {
    try {
      const response = await fetch(
        process.env.REACT_APP_BACK_SERVER + '/honbab/check-matching-status',
        {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
            'Refresh-Token': localStorage.getItem('refreshToken'),
          },
        }
      );
      if (!response.ok) {
        throw new Error('Network response was not ok'); // 응답 상태가 좋지 않을 경우 에러를 발생시킴
      }
      const data = await response.json(); // 주석 해제하여 JSON 응답을 파싱
      console.log(data);
      console.log(data.data.status);
      if (data.data === null || data.data.status === 'TIME_OUT') {
        navigate('/honbob/matching');
      } else if (data.data.status === 'IN_PROGRESS') {
        alert('매칭 중입니다!')
        navigate('/honbob/waiting');
      } else if (data.data.status === 'MATCHING_COMPLETED') {
        alert('매칭에 성공했습니다!')
        navigate('/honbob/accept')
      }

    } catch (error) {
      console.error('에러 체크:', error);
      alert('매칭 체크 실패!');
    }
  };


  const BuddyHandler = async () => {
    try {
      const response = await fetch(
        process.env.REACT_APP_BACK_SERVER + '/honbob/check-matching-status',
        {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
            'Refresh-Token': localStorage.getItem('refreshToken'),
          },
        }
      );

      console.log(response.data);
    } catch (error) {
      alert('에러가 발생했습니다.');
      console.log(error.message);
    }
  };

  return (
    <div className={style.Container}>
      <div className={style.InnerContainer}>
        <div className={style.top}>
          <button className={style.informBtn}>이용방법 확인 <div className={style.informImg}></div></button>

        </div>
        <div className={style.middle}>
          <div className={style.honbobLogo}></div>
          <div className={style.informContext}>
            <div className={style.context1}>혼밥탈출은 혼자 밥을 먹어야 하는</div>
            <div className={style.context1}>상황에 <span style={{ color: "red" }}>밥짝꿍</span>을 찾는 서비스입니다.</div>
          </div>
          <div className={style.findContext}>
            <div className={style.raccoon}></div> <div><span style={{ fontWeight: "700" }}>216</span>명의 학생들이 밥짝꿍을 찾고있어요!</div>
          </div>
          <button className={style.submitBtn} onClick={HonbobHandler}>혼밥탈출 신청하기</button>
        </div>

      </div>
    </div>
  );
};

export default HonbobStart1;
