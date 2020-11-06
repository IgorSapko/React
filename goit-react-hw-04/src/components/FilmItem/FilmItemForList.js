import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';


export default class FilmItemForList extends Component {
  render() {
    const { match, location, data, handleGetDataOfFilm } = { ...this.props };

    if (match.url === '/') {
      match.url = '/movies';
    }
    return (
      <>
        {data.map(elem => {
          return (
            <li key={elem.id} onClick={() => handleGetDataOfFilm(elem.id)}>
              <NavLink
                to={{
                  pathname: `${match.url}/${elem.id}`,
                  state: { from: location },
                }}
              >
                {elem.title ? elem.title : elem.name}
              </NavLink>
            </li>
          );
        })}
      </>
    );
  }
}
