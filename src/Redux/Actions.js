// HTTP State actions
export const API_REQUEST = 'API_REQUEST';
export const API_SUCCESS = 'API_SUCCESS';
export const API_FAILURE_301 = 'API_FAILURE_302';
export const API_FAILURE_404 = 'API_FAILURE_404';  // Not Found


export const apiRequest = () => ({ type: API_REQUEST });
export const apiSuccess = payload => ({ type: API_SUCCESS, payload });
export const apiFailure301 = error => ({ type: API_FAILURE_301, error });
export const apiFailure404 = error => ({ type: API_FAILURE_404, error });

