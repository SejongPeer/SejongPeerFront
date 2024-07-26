import axios from 'axios';

const getAuthHeaders = () => {
  const accessToken = localStorage.getItem('accessToken');
  const refreshToken = localStorage.getItem('refreshToken');

  if (!accessToken || !refreshToken) {
    alert('재로그인 해야합니다!');
    throw new Error('토큰이 없음!');
  }

  return {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${accessToken}`,
    'Refresh-token': `${refreshToken}`,
  };
};

export const fetchStudyData = async studyId => {
  const response = await axios.get(
    `${process.env.REACT_APP_BACK_SERVER}/study/post/${studyId}`,
    {
      headers: getAuthHeaders(),
    }
  );
  return response.data;
};

export const applyForStudy = async studyId => {
  const response = await axios.post(
    `${process.env.REACT_APP_BACK_SERVER}/study/relations`,
    { studyId: parseInt(studyId) },
    {
      headers: getAuthHeaders(),
    }
  );
  return response;
};

export const cancelStudyApplication = async studyId => {
  const response = await axios.delete(
    `${process.env.REACT_APP_BACK_SERVER}/study/relations/${studyId}`,
    {
      headers: getAuthHeaders(),
    }
  );
  return response;
};

export const toggleScrap = async (studyId, isScrapped) => {
  const scrapId = localStorage.getItem(`scrapId_${studyId}`);

  if (isScrapped) {
    if (!scrapId) {
      throw new Error('스크랩 ID가 없음!');
    }
    const response = await axios.delete(
      `${process.env.REACT_APP_BACK_SERVER}/scraps/${scrapId}`,
      {
        headers: getAuthHeaders(),
      }
    );
    return response;
  } else {
    const response = await axios.post(
      `${process.env.REACT_APP_BACK_SERVER}/scraps/study/${studyId}`,
      {},
      {
        headers: getAuthHeaders(),
      }
    );
    return response;
  }
};

export const fetchScrapCount = async studyId => {
  const response = await axios.get(
    `${process.env.REACT_APP_BACK_SERVER}/scraps/study/${studyId}`,
    {
      headers: getAuthHeaders(),
    }
  );
  return response.data;
};
