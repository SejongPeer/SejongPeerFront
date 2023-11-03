import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import email from '../SignUp/InputTextBox.module.css';
import contain from '../SignUp/SignUp.module.css';
import style from '../SignUp/SignUpElement.module.css';
import css from './FindId.module.css';

const ResetPwd = () => {
    const [inputEmail, setInputEmail] = useState('');
    const [inputCode, setInputCode] = useState('');
    const [modifyEmail, setModifyEmail] = useState(false);
    const [sendEmail, setSendEmail] = useState(false);
    const [checkCode, setCheckCode] = useState(false);
    const [isError, setIsError] = useState('');
    const [pwdError, setPwdError] = useState('');
    const [inputPwd, setInputPwd] = useState('');

    const navigate = useNavigate();

    //이메일 입력 핸들러
    const inputEmailHandler = (event) => {
        let inputValue = event.target.value;
        setInputEmail(inputValue + "@sju.ac.kr");
        console.log(inputEmail);
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
            const response = await fetch(process.env.REACT_APP_BACK_SERVER + '/email/verification/send/find-password', {
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
                alert("이메일 전송 실패" + error.message);
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
            const response = await fetch(process.env.REACT_APP_BACK_SERVER + '/email/verification/check/find-password', {
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
            alert('인증성공');
        
            } catch (error) {
                console.error('Error occurred:', error);
                alert('확인에 실패했습니다. 다시 시도해주세요. (에러 내용: ' + error.message + ')');
                setIsError('* 이메일 혹은 인증코드를 확인해주세요');
                e.preventDefault();
            }
    };

    //이메일 전송 성공했을시
    const checkNumber = sendEmail ? email.emailBtn : email.emailCheckBtn;
    //인증코드 확인 성공했을시
    const successCode = checkCode ? email.emailCheckBtn : email.emailBtn;

    //비밀번호 양식
    const inputPwdHandler = (event) => {
        let inputValue = event.target.value;
         // 영어와 숫자를 모두 포함하는지 확인하는 정규 표현식
         const regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,16}$/;

         if (inputValue.length >= 8 && inputValue.length <= 16) {
             if (regex.test(inputValue)) {
                setInputPwd(inputValue);
                setPwdError('');
             } else {
                setPwdError('* 비밀번호는 영어와 숫자를 모두 포함해야 합니다.');
             }
         } else {
            setPwdError('* 비밀번호는 8자이상 16자이하로 작성해주세요');
         }
    }

    //비밀번호 변경
    const resetPwdHandler = async (e) => {
        let resetPwd = {
            "email" : inputEmail,
            "code" : inputCode,
            "newPassword" : inputPwd,
        };

        try {
            const response = await fetch(process.env.REACT_APP_BACK_SERVER + '/email/verification/reset/password', {
                method: 'POST',
                body: JSON.stringify(resetPwd),
                headers: {
                'Content-Type': 'application/json'
                }
            });

            const data = await response.json(); // data 변수를 await로 초기화
        
            if (!response.ok) {
                throw new Error(data.message);
            }
        
            alert('변경완료\n 로그인 페이지로 이동합니다.');
            navigate("/login");
        
            } catch (error) {
                console.error('Error occurred:', error);
                console.error(error.message);
                alert(error.message);
                e.preventDefault();
            }
    };

    return <div className={contain.container}>
        <h2>비밀번호 변경하기</h2>
        <div className={contain.form}>
            <p className={style.title}>이메일</p>

            <div className={email.relative}>
                <div className={email.emailContainer}>
                    <input 
                    className={email.inputText}
                    onChange={inputEmailHandler}
                    placeholder='학교 이메일 입력 (@sju.ac.kr 제외)'
                    readOnly={modifyEmail}
                    />
                    <button type='button'
                    className={successCode}
                    onClick={sendEmailHandler}
                    disabled={checkCode}>인증</button>
                </div>

                <div className={email.emailContainer}>
                    <input 
                    className={email.inputText}
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

            {checkCode && <div className={css.cnt}>
                <p className={style.title}>새로운 비밀번호</p>
                <input 
                className={email.inputText}
                onChange={inputPwdHandler}
                type='password'
                placeholder='비밀번호 입력 (8-16자 영문, 숫자)'/>
                {pwdError && <p className={style.error}>{pwdError}</p>}
            </div>}

            {checkCode && <button 
            className={css.submitBtn}
            onClick={resetPwdHandler}
            >비밀번호 변경하기</button>}
        </div>
    </div>;
}

export default ResetPwd;