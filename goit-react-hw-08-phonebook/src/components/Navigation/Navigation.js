import React from "react";
import { NavLink } from "react-router-dom";
import navigationStyles from "styled-components";
import { connect } from "react-redux";
import { isAuth } from "../../redux/selectors/contactsSelectors.js";

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
function Navigation({ isAuth }) {
  const navigationLinks = [
    { name: "Home", path: "/", visible: true },
    { name: "LOGIN", path: "/login", visible: !isAuth },
    { name: "Register", path: "/register", visible: !isAuth },
    { name: "Contacts", path: "/contacts", visible: isAuth },
  ];
  return (
    <UlStyless>
      {navigationLinks.map((link) => {
        if (link.visible) {
          return (
            <li key={link.name}>
              <NavLink
                exact
                to={link.path}
                className="Nav-Link"
                activeClassName="Active-Nav-Link"
              >
                {link.name}
              </NavLink>
            </li>
          );
        }
      })}
    </UlStyless>
  );
}

const mapStateToProps = (state) => {
  return { isAuth: isAuth(state) };
};

export default connect(mapStateToProps, null)(Navigation);
