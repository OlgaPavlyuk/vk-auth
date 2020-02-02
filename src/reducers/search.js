import {
  SEARCH_REQUEST,
  SEARCH_SUCCESS,
  SEARCH_FAIL,
  CLEAR_SEARCH,
} from '../actions/searchActions';

const initialState = {
  friends: [],
  count: 0,
  isSearch: false,
  isFetching: false,
  error: '',
};


export function searchReducer(state = initialState, action) {
  switch (action.type) {
    case CLEAR_SEARCH:
      return {
        ...state,
        isFetching: false,
        isSearch: false,
        count: 0,
        friends: [],
        error: '',
      }

    case SEARCH_REQUEST:
      return {
        ...state,
        isFetching: true,
        count: 0,
        friends: [],
        error: '',
      }

    case SEARCH_SUCCESS:
      return {
        ...state,
        friends: action.payload.items,
        count: action.payload.count,
        isSearch: true,
        isFetching: false,
      }

    case SEARCH_FAIL:
      return {
        ...state,
        isFetching: false,
        count: 0,
        friends: [],
        isSearch: false,
        error: action.payload.message,
      }

    default:
      return state;
  }
};
