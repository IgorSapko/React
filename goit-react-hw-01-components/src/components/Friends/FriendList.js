import React, { Children } from 'react';
import PropTypes, { bool, number } from 'prop-types';
import FriendListItem from './FriendListItem.js';
import FriendsStyles from 'styled-components';
const FriendsList = FriendsStyles.ul`
list-style:none;
`;

function FriendList({ dataOfFriends }) {
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
  // dataOfFriends: PropTypes.array.isRequired,
  dataOfFriends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string,
      name: PropTypes.string.isRequired,
      isOnline: bool,
      id: PropTypes.number,
    }),
  ).isRequired,
};

export default FriendList;
