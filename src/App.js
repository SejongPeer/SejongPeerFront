import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState, createContext, useEffect } from 'react';
import './App.css';
import { jwtDecode } from 'jwt-decode';

//메인 컴포넌트
import Header from './Components/Header/Header.js';
import StartLoading from './Components/main/Loading/StartLoading.js';
import MainPage from './Components/main/MainPage/MainPage.js';
//버디 컴포넌트
import BuddyStart1 from './Components/Buddy/BuddyStart/BuddyStart1.js';
import BuddyStart2 from './Components/Buddy/BuddyStart/BuddyStart2.js';
import BuddyMatching from './Components/Buddy/Matching/JS/Buddy_Matching';
import BuddyWaiting from './Components/Buddy/BuddyWaiting/BuddyWaiting';
import BuddyAccept from './Components/Buddy/BuddyWaiting/BuddyAccept.js';
import BuddySuccess from './Components/Buddy/BuddyWaiting/BuddySuccess.js';
import Confirm from './Components/Modal/Confirm';

//혼밥 컴포넌트
import Honbob_Matching from './Components/Honbob/Matching/JS/Honbob_Matching';
import HonbobWaiting from './Components/Honbob/HonbobWaiting/HonbobWaiting.js';
import HonbobSuccess from './Components/Honbob/HonbobSuccess/HonbobSuccess.js';
import HonbobStart1 from './Components/Honbob/HonbobStart/HonbobStart1.js';

//회원가입/로그인
import SignIn from './Components/Login/SignIn/SignIn';
import SignUp from './Components/Login/SignUp/SignUp';
import Auth from './Components/Login/SignUp/Auth/Auth.js';
import Major from './Components/Modal/Major';
import FindId from './Components/Login/Find/FindId';
import ResetPwd from './Components/Login/Find/ResetPwd';
import Agree1 from './Components/Login/SignUp/Agree1';
import Agree2 from './Components/Login/SignUp/Agree2';
import Agree3 from './Components/Login/SignUp/Agree3';
import Agree from './Components/Login/SignUp/Agree';

//마이페이지
import MyPage from './Components/Login/MyPage/MyPage';
import Modify from './Components/Login/MyPage/Modify/Modify';

//스터디
import StudyList from './Components/Study/StudyList/StudyList.js';
import StudyPostDeatil from './Components/Study/StudyPostDetail/StudyPostDetail.js';
import StudyPostWrite from './Components/Study/StudyPostWrite/StudyPostWrite.js';
import StudyFilter from './Components/Study/StudyFilterPage/StudyFIlterPage.js';

export const MyContext = createContext();

const App = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState('');
  const [majorValue, setMajorValue] = useState('단과대/학과 선택');
  const [doubleMajorValue, setDoubleMajorValue] = useState('복수/부전공 선택');
  const [doubleCollegeValue, setDoubleCollegeValue] = useState('');
  const [collegeValue, setCollegeValue] = useState('');
  const [buddySubmit, setBuddySubmit] = useState(false);
  const [honbobSubmit, setHonbobSubmit] = useState(false);
  const [isLogined, setIsLogined] = useState(false);
  const [name, setName] = useState('');
  const [studentNum, setStudentNum] = useState('');
  const [grade, setGrade] = useState('');
  const [peerId, setPeerId] = useState('');
  const [buddyCount, setBuddyCount] = useState(0);

  // 타이머 재설정
  const initializeApp = () => {
    const token = localStorage.getItem('refreshToken');
    if (token) {
      setLogoutTimer(token);
    }
  };

  useEffect(() => {
    initializeApp();
  }, []);

  // 토큰 유효기간 타이머
  const setLogoutTimer = (token) => {
    const decodeToken = jwtDecode(token);
    const cuurentTime = Date.now();
    const expTime = decodeToken.exp * 1000;
    const timeUntilLogout = expTime - cuurentTime;
    
    setTimeout(() => {
      logout();
    }, timeUntilLogout);
  };

  // 로그아웃
  const logout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
  };

  return (
    <MyContext.Provider
      value={{
        modalOpen,
        setModalOpen,
        setModalContent,
        majorValue,
        setMajorValue,
        doubleMajorValue,
        setDoubleMajorValue,
        doubleCollegeValue,
        setDoubleCollegeValue,
        buddySubmit,
        setBuddySubmit,
        honbobSubmit,
        setHonbobSubmit,
        setCollegeValue,
        collegeValue,
        setIsLogined,
        isLogined,
        name,
        setName,
        grade,
        setGrade,
        studentNum,
        setStudentNum,
        peerId,
        setPeerId,
        setLogoutTimer,
        setBuddyCount,
        buddyCount
      }}
    >
      <Router>
        <div className="wrapper">
          {modalOpen && (
            <>
              {modalContent === 'buddyConfirm' && (
                <Confirm
                  firstTitle="제출"
                  secondTitle="세종버디를 신청하시겠습니까?"
                  ok="신청"
                />
              )}
              {modalContent === 'selectMajor' && <Major />}
              {modalContent === 'selectDoubleMajor' && <Major id="double" />}
            </>
          )}
          <Header />
          <main className={modalContent === 'buddyConfirm' ? 'fixed' : ''}>
            <Routes>
              <Route exact path="/" element={<StartLoading />} />
              <Route path="/main" element={<MainPage />} />

              <Route path="/buddy/start1" element={<BuddyStart1 />} />
              <Route path="/buddy/start2" element={<BuddyStart2 />} />
              <Route path="/buddy/matching" element={<BuddyMatching />} />
              <Route path="/buddy/waiting" element={<BuddyWaiting />} />
              <Route path="/buddy/accept" element={<BuddyAccept />} />
              <Route path="/buddy/success" element={<BuddySuccess />} />

              <Route path="/honbob/matching" element={<Honbob_Matching />} />
              <Route path="/honbob/waiting" element={<HonbobWaiting />} />
              <Route path="/honbob/start1" element={<HonbobStart1 />} />
              <Route path="/honbob/cancel" element={<HonbobWaiting />} />
              <Route path="/honbob/success" element={<HonbobSuccess />} />

              <Route path="/login" element={<SignIn />} />
              <Route path="/login/signup" element={<SignUp />} />
              <Route path="/login/auth" element={<Auth />} />
              <Route path="/login/findid" element={<FindId />} />
              <Route path="/login/resetpwd" element={<ResetPwd />} />
              <Route path="/login/agree" element={<Agree />} />

              <Route path="/personalinfo" element={<Agree1 />} />
              <Route path="/useinfo" element={<Agree2 />} />
              <Route path="/personalinfo2" element={<Agree3 />} />
              <Route path="/mypage" element={<MyPage />} />
              <Route path="/mypage/modify" element={<Modify />} />

              <Route path="/study" element={<StudyList />} />
              <Route path="/study/detail" element={<StudyPostDeatil />} />
              <Route path="/study/post" element={<StudyPostWrite />} />
              <Route path="/study/filter" element={<StudyFilter />} />
            </Routes>
          </main>
        </div>
      </Router>
    </MyContext.Provider>
  );
};

export default App;
