import { useState } from 'react';
import style from './InputTextBox.module.css';

const NickNameBox = (props) => {
    const [nickname, setNickname] = useState('');

    // 사용자 입력 처리 핸들러
    const handleNicknameChange = (event) => {
        setNickname(event.target.value);
        if (props.nickNameData) props.nickNameData(event.target.value); // 상위 컴포넌트로 입력 데이터를 전달
    };

    // 닉네임 중복 확인 요청을 처리 핸들러
    const checkNicknameDuplicate = async () => {
        //닉네임 최소 2자, 8자 이하
        if (nickname.length < 2 || nickname.length > 8) {
            props.errorHandler("닉네임은 2자 이상, 8자 아내로 작성해주세요");

        } else {
            props.errorHandler("");
        }
       //닉네임 최소 2자, 8자 이하
        if (nickname.length < 2 || nickname.length > 8 ) {
            alert('닉네임은 2자 이상, 8자 아내로 작성해주세요');
        }
        else {
            try {
                const response = await fetch(
                    `${process.env.REACT_APP_BACK_SERVER}/member/check-nickname?nickname=${nickname}`,
                    {
                        method: 'GET',
                    }
                );

                const data = await response.json();

                // 서버로부터 받은 응답을 바탕으로 중복 여부 
                if (data.data.isExist) {
                    alert('중복되는 닉네임 입니다. 다른 닉네임을 입력하세요.');
                    props.errorHandler("중복되는 아이디 입니다. 다른 아이디를 입력하세요");
                    console.log("중복된 닉네임. : " + data.data.isExist);
                } else {
                    alert('사용 가능한 닉네임입니다.');
                    console.log("사용 가능한 닉네임. : " + data.data.isExist);
                }
            } catch (error) {
                console.error('There was an error!', error);
                alert('오류가 발생했습니다. 다시 시도해주세요.');
            }
        }
    };

    return (
        <div className={style.relative}>
            <div className={style.emailContainer}>
                <input
                    className={style.inputText}
                    value={nickname}
                    onChange={handleNicknameChange}
                    placeholder="닉네임을 입력해주세요"
                />
                <button className={style.idcheckBtn} onClick={() => {
                    checkNicknameDuplicate();
                }}>중복 확인</button>
            </div>
        </div>
    );
};

export default NickNameBox;
