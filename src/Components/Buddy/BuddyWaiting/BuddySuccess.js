import style from './BuddySuccess.module.css'
import buddySucces from '../../../Assets/buddySuccess.png'
import { useEffect, useRef, useState } from 'react';

const BuddySuccess = () => {
  const [major, setMajor] = useState('');
  const [grade, setGrade] = useState('');
  const [name, setName] = useState('');
  const [kakao, setKakao] = useState('');
  const isFirstRender = useRef(true);

  //상태변환
  useEffect(() => {
    if (isFirstRender.current) {
      getInfoHandler();
    }
  }, []);

    const getInfoHandler = () => {
        fetch(process.env.REACT_APP_BACK_SERVER + '/buddy/matched/partner/details', {
            method: 'GET',
            headers : {
              Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
              'Refresh-Token': localStorage.getItem('refreshToken'),
            }
          })
          .then((response) => response.json())
          .then((data) => {
            console.log(data);
            setMajor(data.data.collegeMajor);
            setGrade(data.data.grade);
            setName(data.data.name);
            setKakao(data.data.kakaoAccount);
            console.log(data.data.collegeMajor);
            console.log(data.data.grade);
            console.log(data.data.name);
            console.log(data.data.kakaoAccount);
          })
          .catch((error) => console.log(error))
    };

    return <div className={style.container}>
        <p className={style.title}>버디를 찾았습니다!</p>
        <img className={style.buddy_succes} src={buddySucces} alt='buddySucces'/>

        <div className={style.info_box}>
            <div className={style.info_wrapper}>
                <p className={style.info_name}>{name}</p>
                <p className={style.info}>{major}</p>
                <p className={style.info}>{grade}학년</p>
            </div>
        
            <div className={style.info_kakao_box}>
                <span className={style.kakao_title}>카카오톡 아이디</span>
                <span className={style.kakao_id}>{kakao}</span>
            </div>
        </div>

        <button className={style.go_home}>홈페이지로 이동</button>
    </div>
};

export default BuddySuccess;