import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState, createContext, useEffect } from 'react';
import './App.css';
import { jwtDecode } from 'jwt-decode';

//메인 컴포넌트
import Header from './components/header/Header.js';
import StartLoading from './Pages/main/landing/StartLoading.js';
import MainPage from './Pages/main/mainPage/MainPage.js';
//버디 컴포넌트
import BuddyStart1 from './Pages/buddy/info/BuddyStart1.js';
import BuddyStart2 from './Pages/buddy/info/BuddyStart2.js';
import BuddyMatching from './Pages/buddy/Matching/JS/Buddy_Matching.js';
import BuddyWaiting from './Pages/buddy/waiting/BuddyWaiting.js';
import BuddyAccept from './Pages/buddy/accept/BuddyAccept.js';
import BuddySuccess from './Pages/buddy/success/BuddySuccess.js';
import Confirm from './components/Modal/Confirm.js';

//혼밥 컴포넌트
import Honbob_Matching from './Pages/honbob/Matching/JS/Honbob_Matching.js';
import HonbobWaiting from './Pages/honbob/waiting/HonbobWaiting.js';
import HonbobSuccess from './Pages/honbob/success/HonbobSuccess.js';
import HonbobStart1 from './Pages/honbob/info/HonbobStart1.js';

//회원가입/로그인
import SignIn from './Pages/Login/signIn/SignIn.js';
import SignUp from './Pages/Login/signUp/SignUp.js';
import Auth from './Pages/Login/signUp/Auth/Auth.js';
import Major from './components/Modal/Major.js';
import FindId from './Pages/Login/find/findId/FindId.js';
import ResetPwd from './Pages/Login/find/ResetPwd/ResetPwd.js';
import Agree1 from './constants/privacyPolicy/Agree1.js';
import Agree2 from './constants/privacyPolicy/Agree2.js';
import Agree3 from './constants/privacyPolicy/Agree3.js';
import Agree from './Pages/Login/signUp/Agree.js';

//마이페이지
import MyPage from './Pages/myPage/mypage/MyPage.js';
import Modify from './Pages/myPage/modify/Modify.js';

//스터디
import StudyList from './Pages/Study/studyList/StudyList.js';
import StudyPostDeatil from './Pages/Study/studyPostDetail/StudyPostDetail.js';
import StudyPostWrite from './Pages/Study/StudyPostWrite/StudyPostWrite.js';
import StudyFilter from './Pages/Study/studyFilterPage/StudyFIlterPage.js';

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
  const setLogoutTimer = token => {
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
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
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
        buddyCount,
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
