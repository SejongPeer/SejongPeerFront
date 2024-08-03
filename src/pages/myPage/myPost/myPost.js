import StudyMyPost from '../../../components/studyMyPost/studyMyPost';
import COLORS from '../../../theme';
import style from './myPost.module.css';

const MyPost = () => {
  return (
    <div
      className={style.container}
      style={{
        backgroundColor: COLORS.back2,
      }}
    >
      <div className={style.innerContainer}>
        <div
          style={{
            backgroundColor: 'white',
            width: '100%',
            height: '8%',
            marginTop: '7vh',
            fontSize: '0.9rem',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: '8px',
          }}
        >
          *모집마감 버튼을 누르면 인원 수와 상관없이 모집이 마감됩니다.
        </div>
        <StudyMyPost />
      </div>
    </div>
  );
};

export default MyPost;
