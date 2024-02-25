import {
  API_REQUEST,
  API_SUCCESS,
  API_FAILURE_301,
  API_FAILURE_404,
} from './Actions';

const initialState = {
  data: null,
  loading: false,
  error: null,
  statusCode: null,
  sourceComponent: null,
};

const apiReducer = (state = initialState, action) => {
  switch (action.type) {
    case API_REQUEST:
      if (action.source === 'UserMenu') {
        return {
          ...state,
          loading: true,
          error: null,
          statusCode: null,
          sourceComponent: 'UserMenu',
        };
      } else if (action.source === 'Buddy') {
        return {
          ...state,
          loading: true,
          error: null,
          statusCode: null,
          sourceComponent: 'Buddy',
        };
      }

    case API_SUCCESS:
      if (action.source === 'UserMenu') {
        return {
          ...state,
          loading: false,
          data: action.payload,
          error: null,
          statusCode: 200,
          sourceComponent: 'UserMenu',
        };
      } else if (action.source === 'Buddy') {
        return {
          ...state,
          loading: false,
          data: action.payload,
          error: null,
          statusCode: 200,
          sourceComponent: 'Buddy',
        };
      }

    case API_FAILURE_301:
      if (action.source === 'UserMenu') {
        return {
          ...state,
          loading: false,
          error: action.error,
          statusCode: 301,
          sourceComponent: 'UserMenu',
        };
      } else if (action.source === 'Buddy') {
        return {
          ...state,
          loading: false,
          error: action.error,
          statusCode: 301,
          sourceComponent: 'Buddy',
        };
      }

    case API_FAILURE_404:
      return { ...state, loading: false, error: action.error, statusCode: 404 };

    default:
      return state;
  }
};

export default apiReducer;
