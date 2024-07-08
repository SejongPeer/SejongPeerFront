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

export const toggleScrap = async (studyId, isScrapped) => {
  const accessToken = localStorage.getItem('accessToken');
  const refreshToken = localStorage.getItem('refreshToken');
  console.log(accessToken);
  console.log(refreshToken);
  if (!accessToken || !refreshToken) {
    throw new Error('토큰이 없음!');
  }

  const response = await axios.post(
    `${process.env.REACT_APP_BACK_SERVER}/scraps/study/${studyId}`,
    {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
        'Refresh-token': refreshToken,
      },
    }
  );

  return response;
};
