// src/api/study.js
import axios from 'axios';

export const fetchPosts = async () => {
  const accessToken = localStorage.getItem('accessToken');
  const refreshToken = localStorage.getItem('refreshToken');

  if (!accessToken || !refreshToken) {
    throw new Error('Tokens not found in local storage.');
  }

  const response = await axios.get(
    'https://www.api-sejongpeer.shop/api/v1/study/post',
    {
      params: {
        studyType: 'LECTURE', // 또는 'EXTERNAL_ACTIVITY'
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
  return response.data.data.content;
};
