import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import styles from '../MyPage/MyPage.module.css';
import axios from 'axios';

const MyPage = () => {
  const [myPageData, setMyPageData] = useState({});

  const navigate = useNavigate();
  const goModify = () => {
    navigate('/mypage/modify');
  };
  // 탈퇴하기
  const handleDeleteAccount = async () => {
    const confirmDelete = window.confirm(
      '정말로 탈퇴하시겠습니까? 이 작업은 되돌릴 수 없습니다.'
    );
    if (confirmDelete) {
      try {
        const response = await axios.delete(
          `${process.env.REACT_APP_BACK_SERVER}/member/my-page`,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
              'Refresh-Token': localStorage.getItem('refreshToken'),
            },
          }
        );
        if (response.status === 200) {
          // 성공적으로 탈퇴 처리됨
          alert('계정이 성공적으로 삭제되었습니다.');
          // 로컬 스토리지에서 사용자 정보 제거
          localStorage.removeItem('accessToken');
          localStorage.removeItem('refreshToken');
          // 사용자를 로그인 페이지 또는 메인 페이지로 리디렉션
          navigate('/main');
        }
      } catch (error) {
        console.error('탈퇴 처리 중 오류 발생:', error);
        alert('오류가 발생했습니다. 다시 시도해주세요.');
      }
    }
  };
  // 로그아웃
  const handleLogout = () => {
    response => console.log(response),
      localStorage.removeItem('userId'),
      localStorage.removeItem('birth'),
      localStorage.removeItem('gender'),
      localStorage.removeItem('kakaoId'),
      localStorage.removeItem('major'),
      localStorage.removeItem('name'),
      localStorage.removeItem('phoneNum'),
      localStorage.removeItem('sejongEmail'),
      localStorage.removeItem('studentId'),
      localStorage.removeItem('accessToken'),
      localStorage.removeItem('refreshToken'),
      console.log('로그아웃 성공!'),
      alert('로그아웃 되었습니다!'),
      navigate('/main');
  };

  const gender = localStorage.getItem('gender');
  let gender_text = '';
  if (gender === 'male') {
    gender_text = '남자';
  }
  if (gender === 'female') {
    gender_text = '여자';
  }

  const accessToken = localStorage.getItem('accessToken');
  const refreshToken = localStorage.getItem('refreshToken');
  const kakaoId = localStorage.getItem('kakaoId');
  const phoneNum = localStorage.getItem('phoneNum');
  const major = localStorage.getItem('major');
  const name = localStorage.getItem('name');

  // 내 정보 조회
  useEffect(() => {
    const fetchMyPageData = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_BACK_SERVER}/member/my-page`,
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
              'Refresh-Token': refreshToken,
            },
          }
        );

        if (response.status === 200) {
          setMyPageData(response.data.data);
          console.log(response.data);
          console.log(response.data.data.name);
        } else {
          // Handle response error
          throw new Error('Failed to fetch my page data');
        }
      } catch (error) {
        console.error('Error fetching my page data:', error);
        alert('Error fetching your information. Please try again.');
      }
    };

    if (accessToken && refreshToken) {
      fetchMyPageData();
    } else {
      navigate('/login');
    }
  }, [accessToken, refreshToken, navigate]);

  return (
    <div className={styles.Container}>
      <div className={styles.container}>
        {myPageData && (
          <>
            <div className={styles.outerContainer}>
              <div className={styles.container1}>
                <div className={styles.informTitleBox}>
                  <p
                    style={{ fontWeight: '700', marginBottom: '0px' }}
                    className={styles.informTitle}
                  >
                    매칭정보
                  </p>
                </div>

                <div className={styles.matchingBox}>
                  {/* <button className={styles.matchingButton}>
    <div className={styles.leftBox}>
      <div className={`${styles.redWord} ${styles.checkWord}`}>세종스터디</div>
      <div className={`${styles.blackWord} ${styles.checkWord}`} style={{ fontWeight: "700" }}>내 게시글 확인</div>
    </div>
    <div className={styles.rightImg}></div>
  </button> */}
                  <button className={styles.hideBtn}></button>
                  <button className={styles.matchingButton}>
                    <div className={styles.leftBox}>
                      <div className={`${styles.redWord} ${styles.checkWord}`}>
                        세종버디
                      </div>
                      <div
                        className={`${styles.blackWord} ${styles.checkWord}`}
                        style={{ fontWeight: '700' }}
                      >
                        매칭 상대 확인
                      </div>
                    </div>
                    <div className={styles.buddyImg}></div>
                  </button>
                  <button className={styles.matchingButton}>
                    <div className={styles.leftBox}>
                      <div className={`${styles.redWord} ${styles.checkWord}`}>
                        혼밥탈출
                      </div>
                      <div
                        className={`${styles.blackWord} ${styles.checkWord}`}
                        style={{ fontWeight: '700' }}
                      >
                        밥짝꿍 확인
                      </div>
                    </div>
                    <div className={styles.honbobImg}></div>
                  </button>
                </div>
              </div>
              <div className={styles.container2}>
                <div className={styles.informTitleBox}>
                  <p style={{ fontWeight: '700', marginBottom: '0px' }}>
                    내 정보
                  </p>
                </div>

                <div className={styles.myInformBox}>
                  <button className={styles.myInformBtn} onClick={goModify}>
                    <div className={styles.leftBox}>
                      <div
                        className={`${styles.blackWord} ${styles.myInformWord}`}
                        style={{ fontWeight: '700', fontSize: '1.8vh' }}
                      >
                        {myPageData.name}
                      </div>
                      <div
                        className={`${styles.blackWord} ${styles.myInformWord}`}
                      >
                        {myPageData.major}
                      </div>
                    </div>
                    <div className={styles.rightArrow}></div>
                  </button>
                </div>
              </div>
              <div className={styles.container3}>
                <div className={styles.informTitleBox}>
                  <p style={{ fontWeight: '700', marginBottom: '0px' }}>
                    사용방법
                  </p>
                </div>
                <div className={styles.useInformBox}>
                  <button className={styles.useInformBtn}>
                    <div
                      className={styles.redWord2}
                      style={{ fontWeight: '900' }}
                    >
                      세종스터디
                    </div>
                    <div style={{ fontWeight: 'bold' }}>사용법</div>
                  </button>
                  <button className={styles.useInformBtn}>
                    <div
                      className={styles.redWord2}
                      style={{ fontWeight: '900' }}
                    >
                      세종피어
                    </div>
                    <div style={{ fontWeight: 'bold' }}>사용법</div>
                  </button>
                  <button className={styles.useInformBtn}>
                    <div
                      className={styles.redWord2}
                      style={{ fontWeight: '900' }}
                    >
                      혼밥탈출
                    </div>
                    <div style={{ fontWeight: 'bold' }}>사용법</div>
                  </button>
                </div>
              </div>
              <div className={styles.container4}>
                <div className={styles.informTitleBox}>
                  <p style={{ fontWeight: '700', marginBottom: '0px' }}>
                    이용안내
                  </p>
                </div>
                <div className={styles.ruleBox}>
                  <div style={{ textDecoration: 'underline' }}>
                    개인정보처리방침
                  </div>
                  <div style={{ textDecoration: 'underline' }}>이용약관</div>
                  <div style={{ textDecoration: 'underline' }}>
                    커뮤니티 이용규칙
                  </div>
                  <div style={{ textDecoration: 'underline' }}>공지사항</div>
                </div>
              </div>
              <button className={styles.logout}>
                <p
                  style={{ fontWeight: '700', fontSize: '1.3em' }}
                  onClick={handleLogout}
                >
                  로그아웃
                </p>
              </button>
              <button className={styles.secession} onClick={handleDeleteAccount}>
                탈퇴하기
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default MyPage;
