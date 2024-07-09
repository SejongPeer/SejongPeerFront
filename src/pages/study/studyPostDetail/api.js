// src/api/study.js
import axios from 'axios';

export const fetchStudyData = async studyId => {
  const accessToken = localStorage.getItem('accessToken');
  const refreshToken = localStorage.getItem('refreshToken');

  if (!accessToken || !refreshToken) {
    throw new Error('토큰이 없음!');
  }

  const response = await axios.get(
    `${process.env.REACT_APP_BACK_SERVER}/study/post/${studyId}`,
    {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
        'Refresh-token': `${refreshToken}`,
      },
    }
  );

  return response.data;
};

// 스터디 신청 함수
export const applyForStudy = async studyId => {
  const accessToken = localStorage.getItem('accessToken');
  const refreshToken = localStorage.getItem('refreshToken');

  if (!accessToken || !refreshToken) {
    throw new Error('토큰이 없음!');
  }

  const response = await axios.post(
    `${process.env.REACT_APP_BACK_SERVER}/study/relations`,
    { studyId: parseInt(studyId) },
    {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
        'Refresh-token': `${refreshToken}`,
      },
    }
  );

  return response;
};

// 스터디 스크랩 함수
export const toggleScrap = async (studyId, isScrapped, scrapId = null) => {
  const accessToken = localStorage.getItem('accessToken');
  const refreshToken = localStorage.getItem('refreshToken');
  console.log(accessToken);
  console.log(refreshToken);
  if (!accessToken || !refreshToken) {
    throw new Error('토큰이 없음!');
  }

  if (isScrapped) {
    if (!scrapId) {
      throw new Error('스크랩 ID가 없음!');
    }
    // DELETE 요청
    const url = `${process.env.REACT_APP_BACK_SERVER}/scraps/${scrapId}`;
    const response = await axios.delete(url, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
        'Refresh-token': refreshToken,
      },
    });
    return response;
  } else {
    // POST 요청
    const url = `${process.env.REACT_APP_BACK_SERVER}/scraps/study/${studyId}`;
    const response = await axios.post(
      url,
      {},
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${accessToken}`,
          'Refresh-token': refreshToken,
        },
      }
    );
    return response;
  }
};
