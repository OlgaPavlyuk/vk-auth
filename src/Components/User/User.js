import React from 'react';
import Error from '../Error/Error';
import './User.scss';

import FriendsIcon from '../../Icons/FriendsIcon';

const User = (props) => {
  const { firstName, lastName, photo, friendsCount, error, onLogout } = props;

  if (error) return <Error text={error} />

  return (
    <div className="user">
      <h1 className="user__name">
        {firstName} {lastName}
      </h1>
      <div className="user__info">
        <span className="user__friends-count">
          <FriendsIcon width="2rem" height="2rem"/>
          {friendsCount}
        </span>
        <button className="btn logout" onClick={onLogout}>Log out</button>
      </div>
      <img
        src={photo}
        alt={`${firstName} ${lastName}`}
        className="user__photo"
      />
    </div>
  );
};

export default User;
