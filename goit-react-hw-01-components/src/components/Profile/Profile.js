import React from 'react';
// import ProfileStyles from '../Profile/Profile.module.css'
import PropTypes, { number } from 'prop-types';
import ProfileStyles from 'styled-components';

const ProfileWrapper = ProfileStyles.div`
display: flex;
flex-wrap: wrap;
justify-content: center;
padding-top: 20px; 
height: 300px;
width: 250px;
`;
const Description = ProfileStyles.div`
display: block;
text-align: center;
`;
const DescriptionImg = ProfileStyles.img`
width: 100px;
border-radius: 50px;
`;
const Name = ProfileStyles.p`
font-size: 18px;
font-weight: bold;
`;
const TagAndLocation = ProfileStyles.p`
color: gray;
`;
const Stats = ProfileStyles.ul`
padding: 0px;
margin: 0px;
list-style: none;
width: 300px;
display: flex;
justify-content: center;
align-items: center;
background-color: rgb(221, 216, 216)
`;
const StatsItem = ProfileStyles.li`
text-align:center;
height: 80px;
width: 33.33%;
// &:not(:last-child) {
//   margin-right: 40px}
`;
const Label = ProfileStyles.span`
display: block;
 color: gray;
 font-size: 12px;
 margin-top: 20px;
`;
const Quantity = ProfileStyles.span`
font-size: 16px;
 font-weight: bold;
`;
function Profile({ name, tag, location, avatar, stats }) {
  console.log(ProfileStyles);
  return (
    <ProfileWrapper>
      <Description>
        <DescriptionImg
          src={avatar}
          alt="user avatar"
          // className={ProfileStyles.avatar}
        />
        <Name>{name}</Name>
        <TagAndLocation>{tag}</TagAndLocation>
        <TagAndLocation>{location}</TagAndLocation>
      </Description>

      <Stats>
        <StatsItem>
          <Label>Followers </Label>
          <Quantity>{stats.followers}</Quantity>
        </StatsItem>
        <StatsItem>
          <Label>Views </Label>
          <Quantity>{stats.views}</Quantity>
        </StatsItem>
        <StatsItem>
          <Label>Likes </Label>
          <Quantity>{stats.likes}</Quantity>
        </StatsItem>
      </Stats>
    </ProfileWrapper>
  );
}

Profile.defaultProps = {
  // name : 'Ivan',
  tag: 'SuperIvan',
  // location : 'NewYork',
  avatar: 'https://happycoin.club/wp-content/uploads/2020/03/leo.jpg',
  stats: {
    followers: 1000,
    views: 1000,
    likes: 1000,
  },
};

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string,
  stats: PropTypes.object,
};

export default Profile;
