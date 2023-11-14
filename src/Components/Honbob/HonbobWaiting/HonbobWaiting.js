import style from "./HonbobWaiting.module.css";

const HonbobWaiting = () => {
  return (
    <div clsaaName={style.container}>
      <div className={style.TextBox}>
        <p className={style.Text1}>밥짝꿍 찾는 중...</p>
        <p className={style.Text2}>
          밥짝꿍 매칭 시 메시지로
          <br />
          상대방의 정보가 전달됩니다.
        </p>
      </div>

      <div className={style.BtnBox}>
        <button className={style.moveToHomeBtn}>홈페이지로 이동</button>
        <button className={style.cancelBtn}>혼밥탈출 취소</button>
      </div>
    </div>
  );
};

export default HonbobWaiting;
