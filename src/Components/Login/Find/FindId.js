import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import input from '../SignUp/InputTextBox.module.css';
import style from '../SignUp/SignUpElement.module.css';
import contain from '../SignUp/SignUp.module.css';
import css from './FindId.module.css';

const FindId = () => {
    const [inputEmail, setInputEmail] = useState('');
    const [inputCode, setInputCode] = useState('');
    const [modifyEmail, setModifyEmail] = useState(false);
    const [sendEmail, setSendEmail] = useState(false);
    const [checkCode, setCheckCode] = useState(false);
    const [isError, setIsError] = useState('');

    const navigate = useNavigate();
    const goLoginHandler = () => {
        navigate("/login");
    }

    //이메일 입력 핸들러
    const inputEmailHandler = (event) => {
        let inputValue = event.target.value;
        setInputEmail(inputValue + "@sju.ac.kr");
        if(inputValue.includes('@')){
            setIsError('* @sju.ac.kr을 제외하고 작성해주세요');
        } else {
            if(sendEmail === false){
                setIsError('* 이메일 인증을 진행해주세요');
            } else {
                setIsError('');
            }
        }

    };

    //인증번호 입력 핸들러
    const inputCheckHandler = (event) => {
        let inputValue = event.target.value;
        setInputCode(inputValue);
    };

    //이메일 인증번호 전송
    const sendEmailHandler = async (e) => {
        let emailSend = {
            "email" : inputEmail,
        };

        try {
            const response = await fetch(process.env.REACT_APP_BACK_SERVER + '/email/verification/send/find-username', {
                method: 'POST',
                body: JSON.stringify(emailSend),
                headers: {
                'Content-Type': 'application/json'
                }
            });

            const data = await response.json(); // data 변수를 await로 초기화
        
            if (!response.ok) {
                throw new Error(data.message);
            }
        
            setSendEmail(true);
            setIsError('* 인증코드를 작성해주세요');
            alert('제출완료');
        
            } catch (error) {
                console.error('Error occurred:', error);
                console.error(error.message);
                alert(error.message);
                setIsError('* 이메일 전송을 실패했습니다. 이메일을 다시 확인해 주세요');
                e.preventDefault();
            }
    };



    //이메일 인증번호 확인
    async function checkEmailHandler(e) {

        const CheckEmail = {
            "email" : inputEmail,
            "code" : inputCode,
        };

        try {
            const response = await fetch(process.env.REACT_APP_BACK_SERVER + '/email/verification/check/find-username', {
                method: 'POST',
                body: JSON.stringify(CheckEmail),
                headers: {
                'Content-Type': 'application/json'
                }
            });

            const data = await response.json(); // data 변수를 await로 초기화
        
            if (!response.ok) {
                throw new Error(data.message);
            }
        
            console.log(data);
            setModifyEmail(true);
            setCheckCode(true);
            setIsError('');
            alert('인증성공\n 해당 이메일로 아이디를 전송했습니다.');
            
        
            } catch (error) {
                console.error('Error occurred:', error);
                alert('확인에 실패했습니다. 다시 시도해주세요. (에러 내용: ' + error.message + ')');
                setIsError('* 이메일 혹은 인증코드를 확인해주세요');
                e.preventDefault();
            }
    };

    //이메일 전송 성공했을시
    const checkNumber = sendEmail ? input.emailBtn : input.emailCheckBtn;

    //인증코드 확인 성공했을시
    const successCode = checkCode ? input.emailCheckBtn : input.emailBtn;


    return <div className={contain.container}>
    <h2>아이디 찾기</h2>
        <div className={contain.form}>
            <p className={style.title}>이메일</p>

            <div className={input.relative}>
                <div className={input.emailContainer}>
                    <input 
                    className={input.inputText}
                    onChange={inputEmailHandler}
                    placeholder='학교 이메일 입력 (@sju.ac.kr 제외)'
                    readOnly={modifyEmail}
                    />
                    <button type='button'
                    className={successCode}
                    onClick={sendEmailHandler}
                    disabled={checkCode}>인증</button>
                </div>

                <div className={input.emailContainer}>
                    <input 
                    className={input.inputText}
                    onChange={inputCheckHandler}
                    placeholder='인증번호 입력'
                    readOnly={checkCode}
                    />

                    <button 
                    type='button'
                    className={checkNumber}
                    onClick={checkEmailHandler}>확인</button>
                </div>
                {isError && <p className={style.error}>{isError}</p>}
            </div>


            <button 
            className={css.submitBtn}
            onClick={sendEmailHandler}>아이디 찾기</button>

            {checkCode && <div className={css.send}> 
                <p>학교 이메일로 아이디를 전송했습니다.</p> 
                <p onClick={goLoginHandler} 
                className={css.underline}>로그인 페이지로 이동하기</p>
            </div>}
        </div>
    </div>
}

export default FindId;