import React from 'react';
import Loader from '../Loader/Loader';
import Error from '../Error/Error';
import './Friends.scss';

const Friends = (props) => {

  const { error, isFetching, friends, count } = props;

  if (isFetching) return <Loader />

  if (error) return <Error text={error} />

  if (count < 1) {
    return (
      <h3 className="friends__title">No friends found</h3>
    );
  };

  const title = count > 1 ? 'friends' : 'friend';

  return (
    <>
      <h3 className="friends__title">{count} {title} found:</h3>
      <ul className="friends">
        {friends.map(({ id, first_name, last_name } ) => {
          return (
            <li
              key={id}
              className="friends__item"
            >
              {first_name} {last_name}
            </li>
          )
        })}
      </ul>
    </>
  );
};

export default Friends;