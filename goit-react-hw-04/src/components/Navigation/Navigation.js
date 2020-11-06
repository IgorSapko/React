import React from 'react';
import { NavLink } from 'react-router-dom';
import navigationStyles from 'styled-components';

const UlStyless = navigationStyles.ul`
list-style:none;
text-decoration:none;
    font-size: 20px;
    display: flex;
    & :first-child {margin-right:10px; text-decoration:none;};
    
   
    &>li .Active-Nav-Link{
        color:rgb(226, 101, 43)
          };
        
          .Nav-Link{
        color:blue
          };
`;
export default function Navigation() {
  return (
    <UlStyless>
      <li>
        <NavLink
          exact
          to="/"
          className="Nav-Link"
          activeClassName="Active-Nav-Link"
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/movies"
          className="Nav-Link"
          activeClassName="Active-Nav-Link"
        >
          {' '}
          Movies
        </NavLink>
      </li>
    </UlStyless>
  );
}
