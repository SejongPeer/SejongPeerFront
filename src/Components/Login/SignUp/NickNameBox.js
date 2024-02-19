// NickNameBox.js
import { useState } from 'react';
import style from './InputTextBox.module.css';

const NickNameBox = (props) => {
    const [usernickname, setNickname] = useState('');

    // 사용자 입력 처리 핸들러
    const handleNicknameChange = (event) => {
        setNickname(event.target.value);
        if (props.nickNameData) props.nickNameData(event.target.value); // 상위 컴포넌트로 입력 데이터를 전달
    };

    // 닉네임 중복 확인 요청을 처리하는 핸들러
    const checkNicknameDuplicate = async () => {

        try {
            // 서버에 아이디 중복 확인 요청. 가정된 API 엔드포인트: '/api/usernickname/check'
            const response = await fetch('/api/usernickname/check', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ usernickname: usernickname }),
            });

            const data = await response.json();

            // 서버로부터 받은 응답을 바탕으로 중복 여부 
            if (data.isDuplicate) {
                alert('중복되는 아이디 입니다.');
            } else {
                alert('사용 가능한 아이디입니다.');
            }
        } catch (error) {
            console.error('There was an error!', error);
            alert('오류가 발생했습니다. 다시 시도해주세요.');
        }
    };

    return (
        <div className={style.relative}>
            <div className={style.emailContainer}>
                <input
                    className={style.inputText}
                    value={usernickname}
                    onChange={handleNicknameChange}
                    placeholder="닉네임을 입력해주세요"
                />
                <button className={style.idcheckBtn} onClick={checkNicknameDuplicate}>중복 확인</button>
            </div>
        </div>
    );
};

export default NickNameBox;
