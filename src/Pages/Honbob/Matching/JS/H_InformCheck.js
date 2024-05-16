import con from '../CSS/H_Container.module.css';
import style from '../CSS/H_informCheck.module.css';
const H_informCheck = props => {
  const kakaoAccount = localStorage.getItem('kakaoAccount');
  const phoneNumber = localStorage.getItem('phoneNumber');
  return (
    <div className={con.container}>
      <p className={con.title}>입력하신 정보를 확인해주세요.</p>
      <div className={style.informContainer}>
        <div className={style.genderCon}>
          <div>
            <span style={{ color: '#FF7474', fontSize: '2.5vh' }}>•</span>{' '}
            대동지 성별
          </div>

          <div className={style.divBox}>{props.choiceGenderKorean}</div>
        </div>
        <div className={style.menuCon}>
          <div>
            <span style={{ color: '#FF7474', fontSize: '2.5vh' }}>•</span> 선호
            액티비티
          </div>
          <div className={style.divBox}>{props.choiceMenuKorean}</div>
        </div>
        <div className={style.kakaoCon}>
          <div>
            <span style={{ color: '#FF7474', fontSize: '2.5vh' }}>•</span>{' '}
            카카오톡 아이디
          </div>
          <div className={style.divBox}>{kakaoAccount}</div>
        </div>
        <div className={style.phoneNumCon}>
          <div>
            <span style={{ color: '#FF7474', fontSize: '2.5vh' }}>•</span>{' '}
            전화번호
          </div>
          <div className={style.divBox}>{phoneNumber}</div>
        </div>
      </div>
    </div>
  );
};

export default H_informCheck;
