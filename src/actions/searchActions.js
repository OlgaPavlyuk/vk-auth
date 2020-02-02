export const SEARCH_REQUEST = 'SEARCH_REQUEST';
export const SEARCH_SUCCESS = 'SEARCH_SUCCESS';
export const SEARCH_FAIL = 'SEARCH_FAIL';
export const CLEAR_SEARCH = 'CLEAR_SEARCH';
export const USER_LOGOUT = '';

export function getFriends(query) {

  if (query === '') {
    return function (dispatch) {    
      dispatch({
        type: CLEAR_SEARCH,
      })
    }
  };

  const VK = window.VK;
  return function (dispatch) {
    if (query === '') {
      dispatch({
        type: CLEAR_SEARCH,
      })
    }

    dispatch({
      type: SEARCH_REQUEST,
    })

    VK.Api.call('friends.search',
      { q: query, v: '5.103' },
      (response) => {
        if (response.response) {
          const { items, count } = response.response;

          dispatch({
            type: SEARCH_SUCCESS,
            payload: { items, count },
          })

        } else {
          dispatch({
            type: SEARCH_FAIL,
            error: true,
            payload: new Error('Search error')
          });
        }
      }
    );
  }
};

export function clearSearch() {
  return function (dispatch) {
    dispatch({
      type: CLEAR_SEARCH,
    })
  }
};
