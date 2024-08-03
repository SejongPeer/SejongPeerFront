// src/api/study.js
import axios from 'axios';
import useStudyInfoStore from '../../study/useStudyInfoStore';

export const fetchPosts = async () => {
  const accessToken = localStorage.getItem('accessToken');
  const refreshToken = localStorage.getItem('refreshToken');
  const { studyType } = useStudyInfoStore.getState();

  if (!accessToken || !refreshToken) {
    throw new Error('Tokens not found in local storage.');
  }

  const response = await axios.get(
    'https://www.api-sejongpeer.shop/api/v1/study/post',
    {
      params: {
        studyType: studyType.toUpperCase(), // 'LECTURE' or 'EXTERNAL_ACTIVITY'
        page: 0,
      },
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Refresh-token': refreshToken,
        'Content-Type': 'application/json',
      },
      withCredentials: true, // 쿠키를 포함하는 요청에 필요할 수 있습니다.
    }
  );
  console.log(response.data.data);
  console.log(response.data.data.content[0].id);
  return response.data.data.content;
};
