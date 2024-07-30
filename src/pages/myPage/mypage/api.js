import axios from 'axios';

export const fetchScraps = async () => {
  const accessToken = localStorage.getItem('accessToken');
  const refreshToken = localStorage.getItem('refreshToken');

  if (!accessToken || !refreshToken) {
    throw new Error('Tokens not found in local storage.');
  }
  const response = await axios.get(
    `${process.env.REACT_APP_BACK_SERVER}/scraps/all`,
    {
      params: {
        studyType: 'LECTURE',
        page: 0,
      },
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Refresh-token': refreshToken,
        'Content-Type': 'application/json',
      },
      withCredentials: true,
    }
  );
  console.log(response.data.data);
  return response.data.data;
};
