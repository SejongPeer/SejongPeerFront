import style from "./BuddyWaiting.module.css";
import { useNavigate } from "react-router-dom";
import waitingCat from "../../../Assets/waitingCat.png"
import { useEffect, useRef, useState } from "react";

const BuddyWaiting = () => {
  const [countBuddy, setCountBuddy] = useState(0);
  const navigate = useNavigate();
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      countBuddyHandler();
    }
  }, []);
  const moveToMain = () => {
    navigate("/main");
  };
  const countBuddyHandler = async () => {
    try {
      const response = await fetch(
        process.env.REACT_APP_BACK_SERVER + "/buddy/active-count",
        {
          method: 'GET',
        }
      );
      const data = await response.json();
      setCountBuddy(data.data.count);

      if (!response.ok) {
        throw new Error(data.message);
      }
    } catch (error) {
      console.log(error.message);
    }

  };

  const cancelBuddy = async () => {
    const status = checkMatchingStatus();
    if (status) {
      alert("이미 매칭이 완료 되었습니다.");
      navigate("/buddy/accept");
    }
    else {
      if (confirm("신청을 취소하시겠습니까?")) {
        try {
          const response = await fetch(
            process.env.REACT_APP_BACK_SERVER + "/buddy/cancel",
            {
              method: "GET",
              body: JSON.stringify(),
              headers: {
                Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
                'Refresh-Token': localStorage.getItem('refreshToken'),
              },
            }
          );

          const data = await response.json(); // data 변수를 await로 초기화

          if (!response.ok) {
            throw new Error(data.message);
          }

          alert("버디 신청이 취소되었습니다.");
          navigate("/main");
        } catch (error) {
          console.log(error.message);
          alert("오류가 발생했습니다.");
        }
      } else {
        alert("버디 신청이 취소되지 않았습니다.");
      }
    }

  };

  const checkMatchingStatus = async () => {
    try {
      const response = await fetch(
        process.env.REACT_APP_BACK_SERVER + '/buddy/check-matching-status',
        {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
            'Refresh-Token': localStorage.getItem('refreshToken'),
          },
        }
      );
      const data = await response.json();


      if (data.data.status === 'FOUND_BUDDY') {
        return true;
        // alert("이미 매칭이 완료 되었습니다.");
        // navigate("/buddy/accept");
      }

      return false;

      // if (data.data === null || data.data.status === 'CANCEL') {
      //   // navigate('/buddy/start1');
      //   return false;
      // } else if (data.data.status === 'DENIED') {
      //   // alert('상대가 매칭을 거절했습니다. 다시 신청해주세요.');
      //   // navigate('/buddy/start1');
      //   return false;
      // } else if (data.data.status === 'MATCHING_COMPLETED') {
      //   // alert('매칭에 성공했습니다. 정보를 확인해주세요!');
      //   // navigate('/buddy/success');
      //   return true;
      // } else if (data.data.status === 'ACCEPT') {
      //   // alert('신청 수락을 했습니다. 상대방이 수락할때까지 기다려 주세요.');
      //   return false;
      // } else if (data.data.status === 'REJECT') {
      //   alert(
      //     '거절 패널티 1시간이 부과되었습니다. 1시간 이후에 다시 신청해 주세요.'
      //   );
      //   return false;
      // } else if (data.data.status === 'IN_PROGRESS') {
      //   alert('매칭중입니다!');
      //   navigate('/buddy/waiting');
      //   return false;
      // } else if (data.data.status === 'FOUND_BUDDY') {
      //   alert('이미 매칭 되었습니다.');
      //   navigate('/buddy/accept');
      //   return true;
      // }
    } catch (error) {
      alert('에러가 발생했습니다.');
      console.log(error.message);
      return false;
    }
  };

  // useEffect(() => {
  //   checkMatchingStatus();
  //   const intervalId = setInterval(() => checkMatchingStatus(), 3000);
  //   return () => clearInterval(intervalId);
  // }, []);

  return (
    <div className={style.container}>
      <div className={style.TextBox}>
        <p className={style.title}>세종버디</p>
        <p className={style.text1}>{countBuddy}명의 학생들이 버디를 찾고 있어요!</p>
        <img src={waitingCat} className={style.buddyWaitingImg} alt="waitingCat" />
      </div>
      <div className={style.BtnBox}>
        <p className={style.text2}>버디를 찾으면 상대방의 정보(과, 학년) 확인 후 수락 / 거절할 수 있습니다!</p>
        <p className={style.text3}>* 거절 시 한 시간 버디이용 제한 패널티가 부여됩니다.</p>
        <button className={style.moveToHomeBtn} onClick={moveToMain}>메인 페이지로 이동</button>
        <button className={style.cancelBtn} onClick={cancelBuddy}>버디 신청 취소</button>
      </div>
    </div>
  )
}

export default BuddyWaiting;
