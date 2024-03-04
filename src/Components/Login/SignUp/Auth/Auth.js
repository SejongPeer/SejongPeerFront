import style from '../Auth/Auth.module.css';
import { useState, useContext } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { MyContext } from '../../../../App';

const Auth = () => {
  const [Id, setId] = useState('');
  const [passWord, setPassWord] = useState('');

  const navigate = useNavigate();
  const isSejong = () => {
    console.log(Id);
    console.log(passWord);

    let info = {
      id: Id,
      pw: passWord,
    }
    fetch('/api?method=ClassicSession', {
        method: 'POST',
        body: JSON.stringify(info),
        headers: {
          'Content-Type': 'application/json',
        }
      })
      .then((response) => {
        console.log(response);
        response.json()})
      .then((data) => console.log(data))
      .catch(error => console.error('Error:', error));

  };
  // console.log(response.data.result.is_auth);
  // let result = response.data.result.is_auth;
  // console.log(response.data.result.body.name);
  // if (result === true) {
  //   console.log('인증성공');
  //   alert('인증성공!!!!');
  //   setName(response.data.result.body.name);
  //   setGrade(response.data.result.body.grade);
  //   setStudentNum(Id);
  //   navigate('/login/signup');
  // } else {
  //   alert('아이디 및 비밀번호가 일치하지 않습니다');
  // })

  const { name, setName } = useContext(MyContext);
  const { studentNum, setStudentNum } = useContext(MyContext);
  const { grade, setGrade } = useContext(MyContext);

  const handleId = e => {
    setId(e.target.value);
  };
  const handlePassWord = e => {
    setPassWord(e.target.value);
  };
  return (
    <div className={style.container}>
      <div className={style.innerBox}>
        <div className={style.auto}>
          <div className={style.topBox}>
            <div className={style.topInnerBox}>
              <div style={{ fontSize: '2.5vh', fontWeight: '700' }}>
                세종대학교 학생 인증
              </div>
              <div style={{ fontSize: '1.8vh', fontWeight: '500' }}>
                세종대학교 통합 로그인을 통해 인증합니다.
              </div>
              <div style={{ fontSize: '1.8vh', fontWeight: '500' }}>
                (세종대학교 포털 ID/PW)
              </div>
            </div>
          </div>
          <div className={style.inputBox}>
            <input
              className={style.inputContent}
              type="text"
              placeholder="포털 로그인 아이디(학번)"
              onChange={handleId}
            />
            <input
              className={style.inputContent}
              type="password"
              placeholder="포털 로그인 비밀번호"
              onChange={handlePassWord}
            />
          </div>
          <div className={style.authBox}>
            <button className={style.authBtn} onClick={isSejong}>
              통합 로그인 인증
            </button>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className={style.authA}
              href="http://portal.sejong.ac.kr"
            >
              http://portal.sejong.ac.kr
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
