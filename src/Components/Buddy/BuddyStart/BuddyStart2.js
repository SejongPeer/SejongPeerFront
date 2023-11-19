import { useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { fetchData } from "../../../Redux/thunk";
import logo from '../../../Assets/sejongpeer.png';
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
                dispatch(fetchData("Buddy", navigate));
            }

        } catch (error) {
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
    const txt1 = "한명의 학우와 한 학기 동안 버디가 되며, 다음 학기에 새로운 버디를 찾을 수 있습니다.";
    const duration = "매칭은 부스 운영중에만 진행됩니다.";

    return <div className={style.container}>
        <div className={style.top}>

            <div className={style.flex}>
                <img className={style.logo} src={logo} alt='logo'/>
                <p className={style.title}>세종버디란?</p>
            </div>

            <div className={style.wrapper}>
                <p className={style.text2}>버디(Buddy)는 <span className={style.highlight}>‘동료'</span>이자 <span className={style.highlight}>‘단짝'</span>이라는 의미로, 학교생활을 함께 할 <span className={style.highlight}>짝꿍을 찾는 서비스</span>입니다.</p>
                <p className={style.text2}>{txt1}</p>
                <p className={style.text2}>{duration}</p>
            </div>
            
        </div>
        <div className={style.bottom}>
            <button onClick={BuddyHandler} className={style.btn2}>다음 페이지</button>
            <button onClick={BackHandler} className={style.back}>이전 페이지</button>
        </div>
    </div>;
};

export default BuddyStart2;