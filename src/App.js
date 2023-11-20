// import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState, createContext } from "react";
import "./App.css";

import Header from "./Components/Header/Header.js";
import StartLoading from "./Components/main/Loading/StartLoading.js";
import MainPage from "./Components/main/MainPage/MainPage.js";
import BuddyStart1 from "./Components/Buddy/BuddyStart/BuddyStart1.js";
import BuddyStart2 from "./Components/Buddy/BuddyStart/BuddyStart2.js";
import BuddyStart3 from "./Components/Buddy/BuddyStart/BuddyStart3.js";
import BuddyMatching from "./Components/Buddy/Matching/JS/Buddy_Matching";
import BuddyWaiting from "./Components/Buddy/BuddyWaiting/BuddyWaiting";
import Honbob_Matching from "./Components/Honbob/Matching/JS/Honbob_Matching";
import HonbobWaiting from "./Components/Honbob/HonbobWaiting/HonbobWaiting.js";
import HonbobStart1 from "./Components/Honbob/HonbobStart/HonbobStart1.js";
import Confirm from "./Components/Modal/Confirm";
import Finish from "./Components/Buddy/Matching/JS/Finish";
import IfComplete from "./Components/Buddy/Matching/JS/IfComplete";
import SignIn from "./Components/Login/SignIn/SignIn";
import SignUp from "./Components/Login/SignUp/SignUp";
import Major from "./Components/Modal/Major";
import FindId from "./Components/Login/Find/FindId";
import ResetPwd from "./Components/Login/Find/ResetPwd";
import Agree1 from "./Components/Login/SignUp/Agree1";
import Agree2 from "./Components/Login/SignUp/Agree2";
import Agree from "./Components/Login/SignUp/Agree";
import MyPage from "./Components/Login/MyPage/MyPage";

// const router = createBrowserRouter([
//   {path: '/', element:<StartLoading />},
//   {path: '/main', element:<MainPage />},
//   {path: '/buddy/start1', element:<BuddyStart1 />},
//   {path: '/buddy/start2', element:<BuddyStart2 />},
//   {path: '/buddy/start3', element:<BuddyStart3 />},
//   {path: '/buddy/matching', element:<BuddyMatching />},
//   {path: '/buddy/matching/finish', element: <Finish />},
// ]);

export const MyContext = createContext();

const App = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState("");
  const [majorValue, setMajorValue] = useState("단과대/학과 선택");
  const [collegeValue, setCollegeValue] = useState("");
  const [buddySubmit, setBuddySubmit] = useState(false);
  const [honbobSubmit, setHonbobSubmit] = useState(false);
  const [KaKaoDD, setKaKaoDD] = useState("");
  const [isLogined, setIsLogined] = useState(false);
  //const [honbobCancleSubmit, setHonbobCancleSubmit] = useState(false);

  return (
    <MyContext.Provider
      value={{
        modalOpen,
        setModalOpen,
        setModalContent,
        majorValue,
        setMajorValue,
        buddySubmit,
        setBuddySubmit,
        honbobSubmit,
        setHonbobSubmit,
        setCollegeValue,
        collegeValue,
        KaKaoDD,
        setKaKaoDD,
        setIsLogined,
        isLogined
      }}
    >
      <Router>
        <div className="wrapper">
          {modalOpen && (
            <>
              {modalContent === "buddyConfirm" && (
                <Confirm
                  firstTitle="제출"
                  secondTitle="세종버디를 신청하시겠습니까?"
                  ok="신청"
                />
              )}
              {modalContent === "selectMajor" && <Major />}
            </>
          )}
          <Header />

          <main className={modalContent === "buddyConfirm" ? "fixed" : ""}>
            <Routes>
              <Route exact path="/" element={<StartLoading />} />
              <Route path="/main" element={<MainPage />} />
              <Route path="/buddy/start1" element={<BuddyStart1 />} />
              <Route path="/buddy/start2" element={<BuddyStart2 />} />
              <Route path="/buddy/start3" element={<BuddyStart3 />} />
              <Route path="/buddy/matching" element={<BuddyMatching />} />
              <Route path="/buddy/waiting" element={<BuddyWaiting />} />
              <Route path="/honbob/matching" element={<Honbob_Matching />} />
              <Route path="/honbob/waiting" element={<HonbobWaiting />} />
              <Route path="/buddy/matching/finish" element={<Finish />} />
              <Route path="/buddy/ifcomplete" element={<IfComplete />} />
              <Route path="/honbob/start1" element={<HonbobStart1 />} />
              <Route path="/login" element={<SignIn />} />
              <Route path="/login/signup" element={<SignUp />} />
              <Route path="/login/findid" element={<FindId />} />
              <Route path="/login/resetpwd" element={<ResetPwd />} />
              <Route path="/login/agree" element={<Agree />} />
              <Route path="/personalinfo" element={<Agree1 />} />
              <Route path="/useinfo" element={<Agree2 />} />
              <Route path="/mypage" element={<MyPage />} />
              <Route path="/honbob/cancel" element={<HonbobWaiting />} />
            </Routes>
          </main>
        </div>
      </Router>
    </MyContext.Provider>
  );
};

export default App;
