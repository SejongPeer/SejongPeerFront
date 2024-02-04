import { useState } from 'react';
import style from './InputTextBox.module.css';

const IDCheckBox = (props) => {
    const [username, setUsername] = useState('');

    // 사용자 입력을 처리하는 핸들러
    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    
    // 아이디 중복 확인 요청을 처리하는 핸들러
    const checkUsernameDuplicate = async () => {
        if (username.length >= 8) {
            props.errorHandler("");
          } else {
            props.errorHandler("* 아이디는 8자 이상 작성해주세요");
          }
    
        try {
            // 서버에 아이디 중복 확인 요청을 보냅니다. 가정된 API 엔드포인트: '/api/username/check'
            const response = await fetch('/api/username/check', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username: username }),
            });

            const data = await response.json();

            // 서버로부터 받은 응답을 바탕으로 중복 여부를 알림
            if (data.isDuplicate) {
                alert('중복되는 아이디 입니다.');
            } else {
                alert('사용 가능한 아이디입니다.');
            }
        } catch (error) {
            // 네트워크 오류나 서버 오류 발생 시
            console.error('There was an error!', error);
            alert('오류가 발생했습니다. 다시 시도해주세요.');
        }
    };

    return (
        <div className={style.relative}>
            <div className={style.emailContainer}>
            <input
                className={style.inputText}
                value={props.userid}
                onChange={handleUsernameChange}
                placeholder="아이디를 입력하세요 (8자 이상)"
            />
            <button className={style.idcheckBtn} onClick={checkUsernameDuplicate}>중복 확인</button>
            </div>
        </div>
    );
};

export default IDCheckBox;
