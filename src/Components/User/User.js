import React from 'react';
import Error from '../Error/Error';
import './User.scss';

import FriendsIcon from '../../Icons/FriendsIcon';

const User = (props) => {
  const { firstName, lastName, photo, friendsCount, error, onLogout } = props;

  if (error) return <Error text={error} />

  return (
    <div className="user">
      <img
        src={photo}
        alt={`${firstName} ${lastName}`}
        title={`${firstName} ${lastName}`}
        className="user__photo"
      />
      <div className="user__info">
        <button className="btn logout user__logout" onClick={onLogout}>Log out</button>
        <span className="user__friends-count">
          <FriendsIcon width="1.5rem" height="1.5rem"/>
          {friendsCount}
        </span>
      </div>
    </div>
  );
};

export default User;
