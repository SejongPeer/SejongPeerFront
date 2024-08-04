import axios from 'axios';

export const applicantSelection = async data => {
  const accessToken = localStorage.getItem('accessToken');
  const refreshToken = localStorage.getItem('refreshToken');

  if (!accessToken || !refreshToken) {
    throw new Error('Tokens not found in local storage.');
  }

  const response = await axios.patch(
    'https://www.api-sejongpeer.shop/api/v1/study/relations/matching/status',
    data,
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Refresh-token': refreshToken,
        'Content-Type': 'application/json',
      },
      withCredentials: true,
    }
  );
  return response;
};
