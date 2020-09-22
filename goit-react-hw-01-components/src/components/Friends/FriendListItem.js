import React from 'react';
import PropTypes, { number } from 'prop-types';
import FriendsStyles from 'styled-components';

function FriendListItem({ isOnline, avatar, name }) {
  const FriendsListItem = FriendsStyles.li`
  width: 300px;
  border: 2px solid;
  &:not(:last-child) {margin-bottom:10px};
  display:flex;
  align-items:center;
  &>*:not(:last-child){margin-right:10px};
  &>*:first-child{margin-left:10px}
  `;
  const SpanSatatusRed = FriendsStyles.span`
  height: 6px;
  width:6px;
border: 6px solid red;
border-radius: 12px;
background-color:red
  `;
  const SpanSatatusGreen = FriendsStyles.span`
  height: 6px;
  width:6px;
border: 6px solid green;
border-radius: 12px;
background-color:green
  `;
  return (
    <FriendsListItem className="item">
      {isOnline ? (
        <SpanSatatusGreen className="status">{isOnline}</SpanSatatusGreen>
      ) : (
        <SpanSatatusRed className="status">{isOnline}</SpanSatatusRed>
      )}
      <img className="avatar" src={avatar} alt="" width="48" />
      <p className="name">{name}</p>
    </FriendsListItem>
  );
}

FriendListItem.defaultProps = {
  avatar: 'https://happycoin.club/wp-content/uploads/2020/03/leo.jpg',
  isOnline: false,
  // name: 'noname'
};

FriendListItem.propTypes = {
  // dataOfFriends: PropTypes.array,
  avatar: PropTypes.string,
  isOnline: PropTypes.bool,
  name: PropTypes.string.isRequired,
};

export default FriendListItem;
