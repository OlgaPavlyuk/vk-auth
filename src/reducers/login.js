import {
  LOGIN_REQUEST,
  USER_REQUEST,
  LOGIN_FAIL,
  LOGOUT,
  CREAR_LOGIN,
  USER_SUCCESS,
} from '../actions/loginActions'


// isLoading is true to not render auth and button on loading page when user is auth
const initialState = {
  isLogin: false,
  user: {},
  error: '',
  isLoading: true,
};

export function loginReducer(state = initialState, action) {
  switch (action.type) {
    case USER_REQUEST:
    case LOGIN_REQUEST:
      return {
        ...state,
        isLoading: true,
        isLogin: false,
        error: '',
      }

    case LOGIN_FAIL:
      return {
        ...state,
        isLoading: false,
        isLogin: false,
        error: action.payload.message,
      }
    
    case CREAR_LOGIN:
    case LOGOUT:
      return {
        ...state,
        isLoading: false,
        isLogin: false,
        error: '',
        user: {},
      }
    
    case USER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isLogin: true,
        error: '',
        user: action.payload,
      }

    default:
      return state;
  }
};
