import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { handleLogin, handleLogout, checkLogin, CREAR_LOGIN } from '../actions/loginActions';
import { clearSearch } from '../actions/searchActions';
import Loader from '../Components/Loader/Loader';
import Error from '../Components/Error/Error';
import Auth from '../Components/Auth/Auth';
import User from '../Components/User/User';
import Search from '../Containers/Search';

const App = (props) => {
  const {
    login,
    handleLogin,
    handleLogout,
    checkLogin,
    clearLogin,
    clearSearch } = props;
  
  const { isLoading, error, user } = login;

  useEffect(() => {
    const VK = window.VK;
    if (!VK) return (
      <div>VK error</div>
    );

    checkLogin();

  }, [checkLogin]);

  const logout = () => {
    handleLogout();
    clearSearch();
  }

  const renderApp = () => {
    if (isLoading) return <Loader />

    if (error) return <Error text={error} onClose={clearLogin} />

    if (!login.isLogin) return <Auth onClick={handleLogin}/>

    return (
      <>
        <User {...user} onLogout={logout} />
        <Search />
      </>
    )
  }

  return (
    <div className="container">
      {renderApp()}
    </div>
  );
  
}

const mapStateToProps = (store) => {
  return {
    login: store.login,
  }
}

const mapDispatchToProps = dispatch => ({
  handleLogin: () => dispatch(handleLogin()),
  handleLogout: () => dispatch(handleLogout()),
  checkLogin: () => dispatch(checkLogin()),
  clearLogin: () => dispatch({ type: CREAR_LOGIN }),
  clearSearch: () => dispatch(clearSearch()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
