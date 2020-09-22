import React, { Children } from 'react';
import PropTypes, { number } from 'prop-types';
import FriendListItem from './FriendListItem.js';
import FriendsStyles from 'styled-components';

function FriendList({ dataOfFriends }) {
  const FriendsList = FriendsStyles.ul`
  list-style:none;
  
  `;
  return (
    <FriendsList className="friend-list">
      {dataOfFriends.map(elem => {
        return (
          <FriendListItem
            isOnline={elem.isOnline}
            avatar={elem.avatar}
            name={elem.name}
            key={elem.id}
          />
        );
      })}
    </FriendsList>
  );
}

FriendList.propTypes = {
  dataOfFriends: PropTypes.array.isRequired,
};

export default FriendList;
