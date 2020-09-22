import React from 'react';
import Profile from './Profile/Profile.js';
import userData from './Profile/user.json';
import statisticalData from './Statistics/statistical-data.json';
import Statistics from './Statistics/Statistics.js';
import FriendList from './Friends/FriendList';

import friendsData from '../components/Friends/friends.json';
import TransactionHistory from './Transactions/TransactionHistory';
import transactionData from './Transactions/transactions.json';

export default function App() {
  return (
    <>
      <Profile
        name={userData.name}
        tag={userData.tag}
        location={userData.location}
        avatar={userData.avatar}
        stats={userData.stats}
      />

      <Statistics stats={statisticalData} />

      <FriendList dataOfFriends={friendsData}>
 
      </FriendList>

      <TransactionHistory items={transactionData} />
    </>
  );
}
