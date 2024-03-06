import style from '../Auth/Auth.module.css';
import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { MyContext } from '../../../../App';
import axios from 'axios';
const Auth = () => {
  const [Id, setId] = useState('');
  const [passWord, setPassWord] = useState('');

  const navigate = useNavigate();
  const isSejong = () => {
    console.log(Id);
    console.log(passWord);

    axios
    .post(process.env.REACT_APP_BACK_SERVER + '/auth/sejong-auth', {
      id: Id,
      pw: passWord,
    }, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then((response) => {
        console.log(response.data.data);

        let result = response.data.data.isAuth;
        if (result === false)
          alert("아이디 및 비밀번호가 일치하지 않습니다")
        else if (result === true) {
          alert("인증 완료!");
          setName(response.data.data.name);
          setGrade(response.data.data.grade);
          setStudentNum(Id);
          navigate("/login/signup");
        }
    })
      .catch((err) => console.log(err.message));
  };

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
