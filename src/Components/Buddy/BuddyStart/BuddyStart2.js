import { useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux";
import BuddyStart from "../../../Assets/buddyStart2.png"
import style from './BuddyStart.module.css';

const BuddyStart2 = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const BuddyHandler = async() => {
        try {
            const response = await fetch(
                process.env.REACT_APP_BACK_SERVER + "/buddy/check_status",
                {
                method: "GET",
                headers: {
                    "Cache-Control": "no-cache, no-store, must-revalidate",
                    Pragma: "no-cache",
                    Expires: "0",
                },
                }
            );
            
            if (response.status === 301) {
                alert("버디를 찾은 사용자입니다.");
            } else if (response.status === 302) {
                alert("버디를 찾는중인 사용자입니다.");
                navigate("/buddy/waiting");
            } else if (response.status === 200) {
                navigate("/buddy/matching");
            } else {
                alert("로그인이 필요한 서비스입니다!");
                navigate("/login");
            }
        } catch (error) {
            alert("로그인이 필요한 서비스입니다!");
            navigate("/login");
            console.log(error.message);
            alert(error.message);
        }
        
    };
    /** 
    const BuddyHandler = () => {
        dispatch(fetchData("Buddy", navigate));
    };
    */
    const BackHandler = () => {
        navigate('/buddy/start1');
    };

    return <div className={style.container}>
        <div className={style.top}>
            <div className={style.imgBack}>
                <img className={style.buddyImg2} src={BuddyStart} alt='BuddyStart' />
            </div>
            <div className={style.wrapper}>
                <p className={style.title}>세종버디란?</p>
                <p className={style.text}>세종버디(Buddy)는</p>
                <p className={style.text}><span className={style.text_red}>맞춤형 캠퍼스 짝꿍</span>을 찾는 서비스입니다.</p>
                <p className={style.text2}>한명의 학우와 한 학기 동안 버디로 매칭 되며, 다음 학기에 새로운 버디를 찾을 수 있습니다.</p>
            </div>
            
        </div>
        <div className={style.bottom}>
            <button onClick={BuddyHandler} className={style.btn2}>다음 페이지</button>
            <button onClick={BackHandler} className={style.back}>이전 페이지</button>
        </div>
    </div>;
};

export default BuddyStart2;