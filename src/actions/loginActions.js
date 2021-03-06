export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAIL = 'LOGIN_FAIL';
export const LOGOUT = 'LOGOUT';
export const CREAR_LOGIN = 'CREAR_LOGIN';
export const USER_REQUEST = 'USER_REQUEST';
export const USER_SUCCESS = 'USER_SUCCESS';

const VK = window.VK;

export function getUserInfo(id) {
  return function (dispatch) {
    dispatch({
      type: USER_REQUEST,
    })

    VK.Api.call('users.get', {
      users_id: id,
      fields: 'photo_100, counters',
      v: '5.103',
    },
      (response) => {
        if (response.response) {
          const { id, first_name, last_name, photo_100, counters } = response.response[0];
          const user = {
            id,
            firstName: first_name,
            lastName: last_name,
            photo: photo_100,
            friendsCount: counters.friends,
          };

          dispatch({
            type: USER_SUCCESS,
            payload: user,
          })

        } else {
          dispatch({
            type: LOGIN_FAIL,
            payload: new Error(response.error.error_msg)
          });
        }
      }
    );
  }
}

export function handleLogin() {
  return function (dispatch) {
    dispatch({
      type: LOGIN_REQUEST,
    })

    VK.Auth.login((response) => {
      if (response.session) {
        const userId = response.session.user.id;
        dispatch(getUserInfo(userId));
      } else {
        let message;
        if (response.status === 'not_authorized') {
          message = 'Authorization is canceled.'
        } else {
          message = 'Authorization is not allowed. Check your browser settings.';
        }
        dispatch({
          type: LOGIN_FAIL,
          payload: new Error(message)
        });
      }
    }, 2);
  }
};

export function handleLogout() {
  return function (dispatch) {
    VK.Auth.logout(() => {
      dispatch({
        type: LOGOUT,
      });
    })
  }
};

export function checkLogin() {
  return function (dispatch) {
    dispatch({
      type: LOGIN_REQUEST,
    })

    VK.Auth.getLoginStatus((response) => {
      if (response.session) {
        const userId = response.session.mid;
        dispatch(getUserInfo(userId));
      } else {
        dispatch({
          type: CREAR_LOGIN,
        });
      }
    });
  }
}
